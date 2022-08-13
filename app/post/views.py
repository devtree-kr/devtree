from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import PostSerailzer
from .models import Post

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerailzer