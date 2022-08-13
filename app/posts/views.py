from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import PostSerializer

from .models import Posts

# Create your views here.


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
