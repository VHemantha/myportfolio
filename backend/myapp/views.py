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
    

@csrf_exempt
def send_contact_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Send email
        send_mail(
            f'Contact form submission from {name}',
            message,
            email,
            ['hemanthaviraj6@gmail.com'],  # Replace with your email
        )

        return JsonResponse({'message': 'Email sent successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)
