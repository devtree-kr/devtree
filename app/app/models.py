from django.db import models

# Create your models here.


class Post(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    title = models.TextField()
    authorId = models.PositiveBigIntegerField(default=0)
