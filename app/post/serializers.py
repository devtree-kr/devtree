from rest_framework import serializers
from post.models import Item


class ItemSerailzer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['title']
