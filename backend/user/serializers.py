from rest_framework import serializers

from . import models


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['photo', 'name', 'bio', 'gender', 'dob']
