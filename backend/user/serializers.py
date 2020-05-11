from rest_framework import serializers

from . import models


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['profile_pic', 'first_name', 'middle_name',
                  'last_name', 'bio', 'gender', 'dob']
