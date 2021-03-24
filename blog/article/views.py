from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
class BlogView(ModelViewSet):
  serializer_class = ArticleSerializer
  queryset = Article.objects.all()

class BlogCommentView(ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comment.objects.all()

@api_view(['GET'])
def article_comments(request,id):
  comments = Comment.objects.filter(post=id)
  serializer = CommentSerializer(comments,many=True)
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
