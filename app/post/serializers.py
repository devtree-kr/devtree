from rest_framework import serializers
from post.models import Post


class PostSerailzer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'authorId']
