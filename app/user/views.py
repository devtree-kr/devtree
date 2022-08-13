from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserSerailzer
from .models import User
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerailzer
