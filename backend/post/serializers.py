from rest_framework import serializers

from . import models


class BlogPostSerializer(serializers.ModelSerializer):
    likes = serializers.IntegerField(source='post.likes')
    comments = serializers.IntegerField(source='post.comments')
    type = serializers.CharField(source='post.type')

    class Meta:
        model = models.BlogPost
        fields = ['likes', 'comments', 'created_timestamp',
                  'edited_timestamp', 'type', 'content']
