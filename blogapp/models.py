from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    intro = models.TextField(max_length=1000, blank=True, null=True)
    slug = models.SlugField(unique=True)
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    custom_css = models.TextField(max_length=10000, blank=True, null=True)
    custom_closing_body_script_reference = models.TextField(max_length=10000, blank=True, null=True)
    custom_closing_body_script = models.TextField(max_length=10000, blank=True, null=True)
    
    def __unicode__(self):
        return self.title


class ProjectCategory(models.Model):
    category = models.CharField(max_length=100)
    
    def __unicode__(self):
        return self.category


class Project(models.Model):
    title = models.CharField(max_length=100)
    tagline = models.TextField(max_length=1000)
    category = models.ForeignKey(ProjectCategory)
        
    def __unicode__(self):
        return self.title + ", " + self.category
