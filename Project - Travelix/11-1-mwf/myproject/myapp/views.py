
from django.shortcuts import render,redirect
from .models import *
import random
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

def index(request):
    return render(request,'index.html')


def signup(request):
    if request.method=="POST":
        # Check if email already exists
        if User.objects.filter(email=request.POST['email']).exists():
            msg = "Email already exists!!"
            return render(request,'signup.html',{'msg':msg})
            
        # Check if mobile already exists
        if User.objects.filter(mobile=request.POST['mobile']).exists():
            msg = "Mobile number already exists!!"
            return render(request,'signup.html',{'msg':msg})
            
        if request.POST['password'] == request.POST['cpassword']:
            try:
                User.objects.create(
                    name=request.POST['name'],
                    email = request.POST['email'],
                    mobile = request.POST['mobile'],
                    password = request.POST['password'],
                    usertype=request.POST.get('usertype', 'customer')
                )
                msg = "Signup Successfully!! Please login."
                return render(request,'signup.html',{'msg':msg})
            except Exception as e:
                msg = f"Error during signup: {str(e)}"
                return render(request,'signup.html',{'msg':msg})
        else:
            msg = "Password & confirm password does not match!!"
            return render(request,'signup.html',{'msg':msg})

    else:
        return render(request,'signup.html')


def login(request):
    if request.method=="POST":
        try:
            user = User.objects.get(email=request.POST['email'])
            print("****************",type(user.password))
            if user.password==request.POST['password']:
                print("*****************gaya he andar!!")
                request.session['email']=user.email
                request.session['usertype'] = user.usertype
                return redirect('index')
            else:
                msg = "Password does not match!!"
                return render(request,'login.html',{'msg':msg})

        except:
            msg = "Email does not exist!!"
            return render(request,'login.html',{'msg':msg})
    
    else:
        return render(request,'login.html')
    
def logout(request):
    request.session.flush()
    return redirect('login')

def forgot_password(request):
    if request.method == "POST":
        try:
            email = request.POST['email']
            user = User.objects.get(email=email)
            otp = random.randint(1000, 9999)
            request.session['otp'] = otp
            request.session['reset_email'] = email
            
            # Send Email
            subject = 'Password Reset OTP'
            message = f'Your OTP for password reset is: {otp}'
            send_mail(subject, message, settings.EMAIL_HOST_USER, [email])
            
            return redirect('verify_otp')
        except User.DoesNotExist:
            msg = "Email does not exist!!"
            return render(request, 'forgot_password.html', {'msg': msg})
    return render(request, 'forgot_password.html')

def verify_otp(request):
    email = request.session.get('reset_email', '')
    masked_email = email
    if email and '@' in email:
        name, domain = email.split('@')
        if len(name) > 3:
            masked_email = name[:3] + '***@' + domain
        else:
            masked_email = name[0] + '***@' + domain
            
    if request.method == "POST":
        user_otp = request.POST.get('otp', '')
        session_otp = str(request.session.get('otp', ''))
        
        if user_otp == session_otp:
            return redirect('new_password')
        else:
            msg = "Invalid OTP!"
            return render(request, 'verify_otp.html', {'msg': msg, 'masked_email': masked_email, 'email': email})
            
    return render(request, 'verify_otp.html', {'masked_email': masked_email, 'email': email})

def new_password(request):
    if request.method == "POST":
        new_pass = request.POST.get('new_password')
        conf_pass = request.POST.get('cpassword')
        if new_pass == conf_pass:
            email = request.session.get('reset_email')
            user = User.objects.get(email=email)
            user.password = new_pass
            user.save()
            return redirect('login')
        else:
            msg = "Password & confirm password do not match!!"
            return render(request, 'new_password.html', {'msg': msg})
    return render(request, 'new_password.html')

def update_profile(request):
    try:
        user = User.objects.get(email=request.session.get('email'))
    except:
        return redirect('login')
        
    if request.method == "POST":
        user.name = request.POST.get('name')
        user.mobile = request.POST.get('mobile')
        if 'profile_image' in request.FILES:
            user.profile_pic = request.FILES['profile_image']
        user.save()
        return redirect('index')
        
    return render(request, 'update_profile.html', {'user': user})



# ==========================================
# USER CAR RENTAL VIEWS
# ==========================================

def car_rentals(request):
    # Check if a user is logged in
    email = request.session.get('email')
    wishlist_car_ids = []
    
    if email:
        try:
            user = User.objects.get(email=email)
            # Agar agency login hai, toh sirf uski apni cars dikhaani hain
            if user.usertype == 'agency':
                cars = Car.objects.filter(agency=user)
            else:
                # Agar customer hai, toh sabhi agencies ki cars dikhaani hain
                cars = Car.objects.all()
                wishlist_car_ids = list(Wishlist.objects.filter(user=user).values_list('car_id', flat=True))
        except User.DoesNotExist:
            cars = Car.objects.all()
    else:
        # Agar koi login nahi hai, toh bhi sabhi cars dikhaani hain
        cars = Car.objects.all()
        
    return render(request, 'car_rentals.html', {'cars': cars, 'wishlist_car_ids': wishlist_car_ids})

def car_details(request, pk):
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return redirect('car_rentals')
        
    is_in_wishlist = False
    email = request.session.get('email')
    if email:
        try:
            user = User.objects.get(email=email)
            is_in_wishlist = Wishlist.objects.filter(user=user, car=car).exists()
        except User.DoesNotExist:
            pass
            
    return render(request, 'car_details.html', {'car': car, 'is_in_wishlist': is_in_wishlist})


def add_car(request):
    # Ensure user is logged in
    email = request.session.get('email')
    if not email:
        return redirect('login')
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return redirect('login')
        
    # Ensure user is an agency
    if user.usertype != 'agency':
        return redirect('index')
        
    if request.method == 'POST':
        # Retrieve form data
        car_name = request.POST.get('car_name')
        brand = request.POST.get('brand')
        model_year = request.POST.get('model_year')
        plate_number = request.POST.get('plate_number')
        vehicle_type = request.POST.get('vehicle_type', '4-wheeler')
        color = request.POST.get('color')
        mileage = request.POST.get('mileage')
        condition = request.POST.get('condition')
        tyre_condition = request.POST.get('tyre_condition')
        seats = request.POST.get('seats')
        fuel_type = request.POST.get('fuel_type')
        transmission = request.POST.get('transmission')
        price_per_hour = request.POST.get('price_per_hour')
        price_per_day = request.POST.get('price_per_day')
        airbags_count = request.POST.get('airbags_count', 0)
        
        # Checkboxes (defaults to False if not checked)
        has_ac = request.POST.get('has_ac') == 'True'
        has_airbags = request.POST.get('has_airbags') == 'True'
        has_abs = request.POST.get('has_abs') == 'True'
        has_gps = request.POST.get('has_gps') == 'True'
        has_music_system = request.POST.get('has_music_system') == 'True'
        has_reverse_camera = request.POST.get('has_reverse_camera') == 'True'
        
        # File field
        car_image = request.FILES.get('car_image')
        
        # Validation: Check unique plate number
        if Car.objects.filter(plate_number=plate_number).exists():
            return render(request, 'add_car.html', {
                'error_msg': f"A vehicle with plate number '{plate_number}' is already registered."
            })
            
        try:
            # Create Car object
            car = Car.objects.create(
                agency=user,
                car_name=car_name,
                brand=brand,
                model_year=int(model_year),
                plate_number=plate_number,
                vehicle_type=vehicle_type,
                color=color,
                mileage=int(mileage) if mileage else None,
                condition=condition,
                tyre_condition=tyre_condition,
                seats=int(seats),
                fuel_type=fuel_type,
                transmission=transmission,
                price_per_hour=int(price_per_hour),
                price_per_day=int(price_per_day),
                airbags_count=int(airbags_count) if airbags_count else 0,
                has_ac=has_ac,
                has_airbags=has_airbags,
                has_abs=has_abs,
                has_gps=has_gps,
                has_music_system=has_music_system,
                has_reverse_camera=has_reverse_camera,
                car_image=car_image
            )
            return render(request, 'add_car.html', {
                'success_msg': f"Vehicle '{brand} {car_name}' registered successfully!"
            })
        except Exception as e:
            return render(request, 'add_car.html', {
                'error_msg': f"Error registering vehicle: {str(e)}"
            })
            
    return render(request, 'add_car.html')


def edit_car(request, pk):
    # Ensure user is logged in
    email = request.session.get('email')
    if not email:
        return redirect('login')
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return redirect('login')
        
    # Ensure user is an agency
    if user.usertype != 'agency':
        return redirect('index')
        
    # Get the car or return 404
    try:
        car = Car.objects.get(pk=pk)
    except Car.DoesNotExist:
        return redirect('car_rentals')
        
    # Ensure the car belongs to this agency
    if car.agency != user:
        return redirect('car_rentals')
        
    if request.method == 'POST':
        # Retrieve form data
        car.car_name = request.POST.get('car_name')
        car.brand = request.POST.get('brand')
        car.model_year = int(request.POST.get('model_year'))
        car.plate_number = request.POST.get('plate_number')
        car.vehicle_type = request.POST.get('vehicle_type', '4-wheeler')
        car.color = request.POST.get('color')
        
        mileage = request.POST.get('mileage')
        car.mileage = int(mileage) if mileage else None
        
        car.condition = request.POST.get('condition')
        car.tyre_condition = request.POST.get('tyre_condition')
        car.seats = int(request.POST.get('seats'))
        car.fuel_type = request.POST.get('fuel_type')
        car.transmission = request.POST.get('transmission')
        car.price_per_hour = int(request.POST.get('price_per_hour'))
        car.price_per_day = int(request.POST.get('price_per_day'))
        
        airbags_count = request.POST.get('airbags_count')
        car.airbags_count = int(airbags_count) if airbags_count else 0
        
        # Checkboxes (defaults to False if not checked)
        car.has_ac = request.POST.get('has_ac') == 'True'
        car.has_airbags = request.POST.get('has_airbags') == 'True'
        car.has_abs = request.POST.get('has_abs') == 'True'
        car.has_gps = request.POST.get('has_gps') == 'True'
        car.has_music_system = request.POST.get('has_music_system') == 'True'
        car.has_reverse_camera = request.POST.get('has_reverse_camera') == 'True'
        
        # Check unique plate number (excluding current car)
        if Car.objects.filter(plate_number=car.plate_number).exclude(pk=car.pk).exists():
            return render(request, 'edit_car.html', {
                'car': car,
                'error_msg': f"A vehicle with plate number '{car.plate_number}' is already registered."
            })
            
        # File field
        if 'car_image' in request.FILES:
            car.car_image = request.FILES['car_image']
            
        try:
            car.save()
            return render(request, 'edit_car.html', {
                'car': car,
                'success_msg': f"Vehicle '{car.brand} {car.car_name}' updated successfully!"
            })
        except Exception as e:
            return render(request, 'edit_car.html', {
                'car': car,
                'error_msg': f"Error updating vehicle: {str(e)}"
            })
            
    return render(request, 'edit_car.html', {'car': car})

def wishlist(request):
    email = request.session.get('email')
    if not email:
        return redirect('login')
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return redirect('login')
        
    wishlist = Wishlist.objects.filter(user=user)
    request.session['wishlist'] = len(wishlist)
    return render(request, 'wishlist.html', {'wishlist': wishlist})

def add_to_wishlist(request, pk):
    email = request.session.get('email')
    if not email:
        return redirect('login')
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return redirect('login')
        
    if user.usertype != 'customer':
        return redirect('index')
        
    try:
        car = Car.objects.get(pk=pk)
        Wishlist.objects.get_or_create(user=user, car=car)
    except Car.DoesNotExist:
        pass
        
    request.session['wishlist'] = Wishlist.objects.filter(user=user).count()
    
    referer = request.META.get('HTTP_REFERER')
    if referer:
        return redirect(referer)
    return redirect('wishlist')

def delete_from_wishlist(request, pk):
    email = request.session.get('email')
    if not email:
        return redirect('login')
        
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return redirect('login')
        
    try:
        car = Car.objects.get(pk=pk)
        Wishlist.objects.filter(user=user, car=car).delete()
    except Car.DoesNotExist:
        pass
        
    request.session['wishlist'] = Wishlist.objects.filter(user=user).count()
    
    referer = request.META.get('HTTP_REFERER')
    if referer:
        return redirect(referer)
    return redirect('wishlist')
    


