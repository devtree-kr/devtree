from django.db import models

# Create your models here.


class Post(models.Model):
    class Meta:
        db_table = 'posts'
    id = models.PositiveBigIntegerField(primary_key=True)
    title = models.TextField()
    authorId = models.PositiveBigIntegerField(default=0)
