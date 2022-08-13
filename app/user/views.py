from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerailzer
from .models import User
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerailzer

    @action(methods=['get'], detail=False)
    def testGet(self, request):
        return Response("Its user Test!")
