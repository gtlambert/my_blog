from django.conf.urls import include, url
from django.contrib import admin

from blogapp import views as blogapp_views

urlpatterns = [
    url(r'^admin/', include(
        'admin_honeypot.urls',
        namespace='admin_honeypot'
    )),
    url(r'^makechangeshere/', include(admin.site.urls)),
    url(r'^$', blogapp_views.home, name='home'),
    url(r'^blog/', include('blogapp.urls')),
    url(r'^tech-stack$', blogapp_views.tech_stack, name='tech-stack'),
    url(r'^find-me$', blogapp_views.find_me, name='find-me'),
]
