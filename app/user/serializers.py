from rest_framework import serializers
from .models import User


class UserSerailzer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'nickName', 'address', 'tel',
                  'sex', 'birthday', 'corpId', 'createdAt', 'updatedAt']
