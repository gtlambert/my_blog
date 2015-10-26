from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    intro = models.CharField(max_length=1000)
    slug = models.SlugField(unique=True)
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    
    def __unicode__(self):
        return self.title
