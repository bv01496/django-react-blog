from rest_framework import serializers
from .models import Article, BlogTag , Comment

class BlogTagSerializer(serializers.ModelSerializer):
  # name = serializers.CharField(many=True)
  class Meta:
    model = BlogTag
    fields = ('name',)

class ArticleSerializer(serializers.ModelSerializer):
  tags = BlogTagSerializer(many=True)
  class Meta:
    model = Article
    fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__' 