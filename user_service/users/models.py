from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Adicione campos adicionais, se necessário
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username
