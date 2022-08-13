from rest_framework import serializers
from .models import UserItem


class UserItemSerailzer(serializers.ModelSerializer):
    class Meta:
        model = UserItem
        fields = ['id', 'email', 'name', 'nickName', 'address', 'tel',
                  'sex', 'birthday', 'corpId', 'createdAt', 'updatedAt']
