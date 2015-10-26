from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'(?P<slug>[a-zA-Z\d\-]+)$', views.view_post, name='view-post'),
]