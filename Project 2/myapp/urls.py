from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('offers/', views.offers, name='offers'),
    path('blog/', views.blog, name='blog'),
    path('contact/', views.contact, name='contact'),
    path('single-listing/', views.single_listing, name='single_listing'),
    path('elements/', views.elements, name='elements'),
]
