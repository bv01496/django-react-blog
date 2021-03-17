from django.urls import path,include
from .views import BlogTagView,BlogCommentView,BlogView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('blogs', BlogView)
router.register('blog-comments', BlogCommentView)
router.register('blog-tags', BlogTagView)

urlpatterns = [
    path("",include(router.urls))
]
