import uuid
from django.db import models
from django.contrib.auth.models import User


BLOG = 'Bl'
POST_TYPE_CHOICES = [
    (BLOG, 'Blog'),
]


class Post(models.Model):
    post_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(
        max_length=2, choices=POST_TYPE_CHOICES, default=BLOG
    )
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)


class BlogPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    edited_timestamp = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        unique_together = ('user', 'post',)


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'post',)


class Comment(models.Model):
    comment_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    edited_timestamp = models.DateTimeField(auto_now=True)
    content = models.TextField()
