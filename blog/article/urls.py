from django.urls import path,include
from .views import BlogTagView,BlogCommentView,BlogView
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from .views import top_blogs,by_author,article_comments

router = DefaultRouter()
router.register('blogs', BlogView)
router.register('blog-comments', BlogCommentView)
router.register('blog-tags', BlogTagView)

urlpatterns = [
    path("",include(router.urls)),
    path("top-blogs", top_blogs, name="top_blogs"),
    path("by/<slug>", by_author, name="by_author"),
    path("comments/<id>", article_comments, name="comments"),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
