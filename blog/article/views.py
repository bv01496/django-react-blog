from .models import *
from .serializers import *
import sys
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from django.http import JsonResponse
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


class Account(ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()
  authentication_classes = [TokenAuthentication]
  permission_classes=[]

class BlogView(ModelViewSet):
  serializer_class = ArticleSerializer
  queryset = Article.objects.all()

class BlogCommentView(ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comment.objects.all()
  def retrieve(self,request,*args,**kwargs):
    id = kwargs["pk"]
    data = {}
    try:
      arti = Article.objects.get(id=id)
    except Article.DoesNotExist:
      return Response("article does not exist",status=status.HTTP_404_NOT_FOUND)
    objs = arti.blog_comment.all()
    serializer = CommentSerializer(objs,many=True)
    return Response(serializer.data)


class BlogTagView(ModelViewSet):
  serializer_class = BlogTagSerializer
  queryset = Comment.objects.all()

@api_view(["GET"])
def top_blogs(request):
  top_articles = Article.objects.filter(is_trending=True)
  serializer = ArticleSerializer(top_articles,many=True)
  return Response(serializer.data)


@api_view(["GET"])
def by_author(request,slug):
  articles = Article.objects.filter(author=slug)
  serializer = ArticleSerializer(articles, many=True)
  return Response(serializer.data)


# @api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# # @permission_classes([IsAuthenticated])
# def example_view(request, format=None):
#     content = User.objects.all()
#     serializer = UserSerializer(content,many=True)
#     return Response(serializer.data)
