from django.db import models

# Create your models here.


class User(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.TextField()
    nickName = models.TextField()
    address = models.TextField(null=True)
    tel = models.TextField(null=True)
    sex = models.IntegerField()
    birthday = models.DateField()
    name = models.TextField(null=True)
    corpId = models.PositiveBigIntegerField(null=True)
    createdAt = models.DateTimeField(auto_created=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
