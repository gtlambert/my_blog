from django.shortcuts import render

from .models import Post


def home(request):
    return render(request, 'index.html')


def view_post(request, slug):
    print(slug)
    post = Post.objects.get(slug=slug)
    context_dict = {'post': post}
    return render(request, 'view_post.html', context=context_dict)