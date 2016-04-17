from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    meta_keywords = models.CharField(max_length=200, blank=True, null=True)
    meta_description = models.CharField(max_length=500, blank=True, null=True)
    intro = models.TextField(max_length=1000, blank=True, null=True)
    slug = models.SlugField(unique=True)
    text = models.TextField()
    created_on = models.DateTimeField()
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


class Language(models.Model):
    name = models.CharField(max_length=100)
    start_date = models.DateField()
    image_path = models.CharField(max_length=100) # will this need to be markdown using template tag filter?

    def __unicode__(self):
        return self.name


class LanguageCategory(models.Model):
    name = models.CharField(max_length=100)
    parent_language = models.ForeignKey(Language)

    def __unicode__(self):
        return self.name


class LanguageModule(models.Model):
    name = models.CharField(max_length=100)
    parent_language_category = models.ForeignKey(LanguageCategory)

    def __unicode__(self):
        return self.name
