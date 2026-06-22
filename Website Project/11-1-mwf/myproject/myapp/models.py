from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    mobile = models.BigIntegerField(unique=True)
    password = models.CharField(max_length=30)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    usertype = models.CharField(max_length=30, default="customer")

    def __str__(self):
        return f"{self.name}"
    
class Car(models.Model):
    agency = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    number = models.CharField(max_length=20, unique=True)
    price = models.IntegerField()
    image = models.ImageField(upload_to='car_pics/', null=True, blank=True)
    routes = models.CharField(max_length=200, help_text="e.g. Ahmedabad - Vadodara - Surat")

    def __str__(self):
        return f"{self.name} ({self.number})"
    