from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserItemSerailzer
from .models import UserItem
# Create your views here.


class UserItemViewSet(viewsets.ModelViewSet):
    queryset = UserItem.objects.all()
    serializer_class = UserItemSerailzer
