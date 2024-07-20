from django.db import models


class Projects(models.Model):
    # Define the choices for the category field
    CATEGORY_CHOICES = [
        ('WEB', 'Web'),
        ('DATA_SCIENCE', 'Data Science'),
        ('GAMES', 'Games'),
        ('RPA', 'Rpa'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    url = models.CharField(max_length=512)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='WEB')

    def __str__(self):
        return self.title


class Blogs(models.Model):
    CATEGORY_CHOICES = [
        ('WEB', 'Web'),
        ('DATA_SCIENCE', 'Data Science'),
        ('GAMES', 'Games'),
        ('RPA', 'Rpa'),
    ]
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='images/')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='RPA')

    def __str__(self):
        return self.title