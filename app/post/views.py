from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import PostItemSerailzer
from .models import PostItem

# Create your views here.


class PostItemViewSet(viewsets.ModelViewSet):
    queryset = PostItem.objects.all()
    serializer_class = PostItemSerailzer
