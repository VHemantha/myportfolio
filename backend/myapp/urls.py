from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectsViewSet, BlogsViewSet,BlogDetailView, send_contact_email

router = DefaultRouter()
router.register(r'projects', ProjectsViewSet)
router.register(r'blogs', BlogsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('blog/<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
    path('contactme/', send_contact_email.as_view(), name='contact'),
]
