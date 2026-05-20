from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def offers(request):
    return render(request, 'offers.html')


def blog(request):
    return render(request, 'blog.html')


def contact(request):
    return render(request, 'contact.html')


def single_listing(request):
    return render(request, 'single_listing.html')


def elements(request):
    return render(request, 'elements.html')
