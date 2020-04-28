from rest_framework import viewsets, permissions
from rest_framework.response import Response

from . import serializers
from . import models


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class_blog = serializers.BlogPostSerializer

    def get_queryset(self):
        return models.Post.objects.filter(user=self.request.user)

    def get_queryset_blog(self):
        posts = models.Post.objects.filter(
            user=self.request.user, type=models.BLOG
        )
        return models.BlogPost.objects.filter(post__in=posts)

    def list(self, request, *args, **kwargs):
        blogs = self.serializer_class_blog(self.get_queryset_blog(), many=True)
        return Response(blogs.data)
