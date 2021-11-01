from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from api.serializers import UserSerializer

from rest_framework import viewsets
from .models import UserProfile
from api.serializers import UserProfileSerializer


class UserViewset(viewsets.ModelViewSet): # built in GET, POST, PUT, DELETE
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserProfileViewset(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        userSerializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': userSerializer.data})



