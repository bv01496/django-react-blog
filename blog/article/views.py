from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet

class BlogView(ModelViewSet):
  serializer_class = ArticleSerializer
  queryset = Article.objects.all()

class BlogCommentView(ModelViewSet):
  serializer_class = CommentSerializer
  queryset = Comment.objects.all()

class BlogTagView(ModelViewSet):
  serializer_class = BlogTagSerializer
  queryset = Comment.objects.all()
