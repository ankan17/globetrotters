from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from .models import Comment, Like


@receiver(post_save, sender=Comment)
def add_comment_handler(sender, signal, instance, **kwargs):
    instance.post.comments = instance.post.comments + 1
    instance.post.save()


@receiver(post_save, sender=Like)
def add_like_handler(sender, signal, instance, **kwargs):
    instance.post.likes = instance.post.likes + 1
    instance.post.save()


@receiver(post_delete, sender=Comment)
def delete_comment_handler(sender, signal, instance, **kwargs):
    instance.post.comments = instance.post.comments - 1
    instance.post.save()


@receiver(post_delete, sender=Like)
def delete_like_handler(sender, signal, instance, **kwargs):
    instance.post.likes = instance.post.likes - 1
    instance.post.save()
