from django.urls import path
from .views import bring_up
urlpatterns = [
    path('', bring_up),
]