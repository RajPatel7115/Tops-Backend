from django.contrib import admin
from .models import *
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'mobile', 'usertype')

admin.site.register(User, UserAdmin)

class CarAdmin(admin.ModelAdmin):
    list_display = ('car_name', 'brand', 'plate_number', 'price_per_day', 'agency')
    list_filter = ('brand', 'fuel_type', 'transmission', 'agency')
    search_fields = ('car_name', 'brand', 'plate_number')

admin.site.register(Car, CarAdmin)