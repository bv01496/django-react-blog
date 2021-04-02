from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class BlogTag(models.Model):
  name = models.CharField(max_length=40)
  def __str__(self):
      return self.name
  

class Article(models.Model):
  image = models.ImageField(upload_to= "blogs/images",blank=False,default="")
  title = models.CharField(max_length=30)
  author = models.CharField(max_length=40)
  tags = models.ManyToManyField(BlogTag, related_name="blog_tags")
  created = models.DateField(auto_now_add=True)
  content = models.TextField()
  is_trending = models.BooleanField(default=False)

  class Meta:
    ordering = ['-created']

  def __str__(self):
      return self.title
  

class Comment(models.Model):
  post = models.ForeignKey(Article,on_delete=models.CASCADE,related_name="blog_comment")
  user = models.ForeignKey(User,on_delete=models.SET_DEFAULT,related_name="commented_user",default="Anonymous")
  comment = models.TextField()
  created = models.DateTimeField(auto_now_add=True, null=True)

  class Meta:
    ordering = ['-created']

  def __str__(self):
    return (f"{self.user} commented on {self.post} post")

@receiver(post_save, sender=User)
def create_token(sender,instance=None,created=False, **kwargs):
  if created:
    Token.objects.create(user=instance)
    

