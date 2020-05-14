from django.db import models
from django.contrib.auth.models import User


MALE = 'Ml'
FEMALE = 'Fl'
TRANS = 'Tr'
GENDER_CHOICES = [
    (MALE, 'Male'),
    (FEMALE, 'Female'),
    (TRANS, 'Trans-gender')
]


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(
        default=None, null=True, upload_to='profile_pics'
    )
    name = models.CharField(max_length=50, null=True)
    bio = models.TextField(max_length=500, blank=True, null=True)
    gender = models.CharField(
        max_length=2, choices=GENDER_CHOICES, null=True, blank=True
    )
    dob = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username
