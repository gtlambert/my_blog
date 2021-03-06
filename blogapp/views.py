from django.shortcuts import render
from django.conf import settings

from .models import Post


def home(request):
    all_posts = Post.objects.filter(live=True).order_by('-created_on')
    context_dict = {'all_posts': all_posts}
    if settings.GOOGLE_ANALYTICS_TAG:
        context_dict['google_analytics_tag'] = settings.GOOGLE_ANALYTICS_TAG
    return render(request, 'index.html', context=context_dict)


def tech_stack(request):
    return render(request, 'tech-stack.html')


def find_me(request):
    return render(request, 'find-me.html')


def view_post(request, slug):
    specific_post = Post.objects.get(slug=slug)
    context_dict = {'specific_post': specific_post}
    return render(request, 'view_post.html', context=context_dict)
