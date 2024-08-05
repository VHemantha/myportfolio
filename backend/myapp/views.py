from rest_framework import viewsets
from .models import Projects, Blogs
from .serializers import ProjectsSerializer, BlogsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BlogSerializer
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import logging
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer

class BlogDetailView(APIView):
    def get(self, request, pk):
        try:
            blog = Blogs.objects.get(pk=pk)
            serializer = BlogSerializer(blog)
            return Response(serializer.data)
        except Blogs.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    



logger = logging.getLogger(__name__)

@csrf_exempt
def send_contact_email(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not all([name, email, message]):
                return JsonResponse({'error': 'Missing required fields'}, status=400)

            email_subject = f"Contact Form Submission from {name}"
            email_body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

            email = EmailMessage(
                subject=email_subject,
                body=email_body,
                from_email=settings.EMAIL_HOST_USER,
                to=['hemanthaviraj6@gmail.com'],  # Replace with the intended recipient
                reply_to=[email]
            )

            email.send(fail_silently=False)
            
            logger.info(f"Email sent successfully for {name}")
            return JsonResponse({'message': 'Email sent successfully'}, status=200)

        except json.JSONDecodeError:
            logger.error("Invalid JSON in request body")
            return JsonResponse({'error': 'Invalid JSON in request body'}, status=400)
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return JsonResponse({'error': 'Failed to send email'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)