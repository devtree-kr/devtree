from rest_framework import serializers
from post.models import PostItem


class PostItemSerailzer(serializers.ModelSerializer):
    class Meta:
        model = PostItem
        fields = ['id', 'title', 'authorId']
