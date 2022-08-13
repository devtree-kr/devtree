from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import PostSerailzer
from .models import Post

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerailzer

    @action(methods=['get'], detail=False)
    def testGet(self, request):
        return Response("Its post Test!")
