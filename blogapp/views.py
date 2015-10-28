from django.shortcuts import render

from .models import Post


def home(request):
    all_posts = Post.objects.all()
    context_dict = {'all_posts': all_posts}
    return render(request, 'index.html', context=context_dict)


def view_post(request, slug):
    specific_post = Post.objects.get(slug=slug)
    all_posts = Post.objects.all()
    context_dict = {
                    'specific_post': specific_post,
                    'all_posts': all_posts
                    }
    return render(request, 'view_post.html', context=context_dict)

def my_stack(request):
    return render(request, 'my_stack.html')