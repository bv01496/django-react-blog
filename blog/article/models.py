from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class BlogTag(models.Model):
  name = models.CharField(max_length=40)
  def __str__(self):
      return self.name
  

class Article(models.Model):
  title = models.CharField(max_length=30)
  author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="blog_author")
  tags = models.ManyToManyField(BlogTag, related_name="blog_tags")
  created = models.DateField(auto_now_add=True)
  content = models.TextField()

  def __str__(self):
      return self.title
  

class Comment(models.Model):
  post = models.ForeignKey(Article,on_delete=models.PROTECT,related_name="blog_comment")
  user = models.ForeignKey(User,on_delete=models.SET_DEFAULT,related_name="commented_user",default=1)
  comment = models.TextField()
  def __str__(self):
    return (f"{self.user} commented on {self.post} post")
  