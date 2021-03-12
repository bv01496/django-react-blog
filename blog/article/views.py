from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import ArticleSerializer

@api_view(['GET'])
def index(request):
  articles = Article.objects.all()
  resp = ArticleSerializer(articles,many=True)
  return Response(resp.data)

def bring_up(request):
  article = Article.objects.get(id= 1)
  return HttpResponse(article.blog_comment.all())