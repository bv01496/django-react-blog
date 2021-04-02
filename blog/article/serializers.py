from rest_framework import serializers
from .models import Article, BlogTag , Comment
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username','password','first_name','last_name')
    extra_kwargs = {"password": {'write_only': True,"required":True}}
  def create(self,validated_data):
    user = User.objects.create_user(**validated_data)
    return user
    
class BlogTagSerializer(serializers.ModelSerializer):
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