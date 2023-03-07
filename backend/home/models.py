from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)
