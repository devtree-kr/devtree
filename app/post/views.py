from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ItemSerailzer
from .models import Item

# Create your views here.


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerailzer
