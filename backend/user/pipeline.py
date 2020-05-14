import requests
from social_core.backends.google import GoogleOAuth2
from django.conf import settings

from . import models


def save_name(details, user, is_new, *args, **kwargs):
    if is_new:
        profile = models.Profile.objects.get(user=user)
        profile.name = details.get('fullname', None)
        profile.save()


def save_photo(backend, details, response, user, is_new, *args, **kwargs):
    if is_new:
        url = None
        image_url = None
        if backend.__class__ == GoogleOAuth2:
            url = response.get('picture', None)
        if url is not None:
            username = user.username
            image = requests.get(url)
            filepath = "{}/profile_pics/{}.jpg".format(
                settings.MEDIA_ROOT, username
            )
            with open(filepath, "wb") as handle:
                handle.write(image.content)
            image_url = "profile_pics/{}.jpg".format(username)
        profile = models.Profile.objects.get(user=user)
        profile.photo = image_url
        profile.save()
