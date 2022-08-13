from django.db import models

# Create your models here.


class Item(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    title = models.TextField()
    authorId = models.PositiveBigIntegerField(default=0)
