from django.urls import path,include
from .views import BlogTagView,BlogCommentView,BlogView,Account
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from .views import top_blogs,by_author

router = DefaultRouter()
router.register('blogs', BlogView)
router.register('blog-comments', BlogCommentView)
router.register('blog-tags', BlogTagView)
router.register('account', Account)

urlpatterns = [
    path("",include(router.urls)),
    path("top-blogs", top_blogs, name="top_blogs"),
    path("by/<slug>", by_author, name="by_author"),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
