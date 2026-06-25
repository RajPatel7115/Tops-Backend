from django.urls import path
from myapp import views

urlpatterns = [
      path('', views.index, name='index'),
      path('signup/', views.signup, name='signup'),
      path('login/', views.login, name='login'),
      path('logout/', views.logout, name='logout'),
      path('forgot-password/', views.forgot_password, name='forgot_password'),
      path('verify-otp/', views.verify_otp, name='verify_otp'),
      path('new-password/', views.new_password, name='new_password'),
      path('update-profile/', views.update_profile, name='update_profile'),
      path('add-car/', views.add_car, name='add_car'),
      path('edit-car/<int:pk>/', views.edit_car, name='edit_car'),
      
      # User URLs
      path('car-rentals/', views.car_rentals, name='car_rentals'),
      path('car-details/<int:pk>/', views.car_details, name='car_details'),
      
      # Wishlist URLs
      path('wishlist/', views.wishlist, name='wishlist'),
      path('add-to-wishlist/<int:pk>/', views.add_to_wishlist, name='add_to_wishlist'),
      path('delete-from-wishlist/<int:pk>/', views.delete_from_wishlist, name='delete_from_wishlist'),
]
