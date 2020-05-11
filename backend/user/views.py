from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response

from . import models
from . import serializers


class ProfileRetrieveView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = serializers.ProfileSerializer

    def get_object(self):
        return models.Profile.objects.get(user=self.request.user)


class ProfileUpdateView(generics.UpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = serializers.ProfileSerializer

    def get_object(self):
        return models.Profile.objects.get(user=self.request.user)
