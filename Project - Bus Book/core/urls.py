from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
    path('search/', views.search, name='search'),
    path('seats/', views.seats, name='seats'),
    path('booking/', views.booking, name='booking'),
    path('confirmation/', views.confirmation, name='confirmation'),
    path('offers/', views.offers, name='offers'),
    path('advance/', views.advance, name='advance'),
    path('charter/', views.charter, name='charter'),
    path('my-trips/', views.my_trips, name='my-trips'),
    path('track/', views.track, name='track'),
    path('support/', views.support, name='support'),
    path('admin-dashboard/', views.admin_dashboard, name='admin-dashboard'),
    path('404/', views.page_not_found, name='404'),
]
