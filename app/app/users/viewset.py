from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User


class UdemyUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


class UdemyUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UdemyUserSerializer
