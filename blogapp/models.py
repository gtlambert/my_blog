from django.db import models
from django.contrib.syndication.views import Feed
from django.core.urlresolvers import reverse


class Post(models.Model):
    title = models.CharField(max_length=100)
    meta_keywords = models.CharField(max_length=200, blank=True, null=True)
    meta_description = models.CharField(max_length=500, blank=True, null=True)
    intro = models.TextField(max_length=1000, blank=True, null=True)
    slug = models.SlugField(unique=True)
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    custom_css = models.TextField(max_length=10000, blank=True, null=True)
    custom_closing_body_script_reference = models.TextField(max_length=10000, blank=True, null=True)
    custom_closing_body_script = models.TextField(max_length=10000, blank=True, null=True)

    def __unicode__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('view-post', kwargs={'slug': self.slug})


class LatestPosts(Feed):
    title = "Latest Posts"
    link = "/"

    def items(self):
        return Post.objects.all()

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.text
