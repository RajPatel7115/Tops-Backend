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
        email = request.POST['email']
        mobile = request.POST['mobile']
        password = request.POST['password']
        cpassword = request.POST['cpassword']
        
        # Check if email already exists
        if User.objects.filter(email=email).exists():
            msg = "User with this Email already exists!!"
            return render(request, 'signup.html', {'msg': msg})
            
        # Check if mobile already exists
        if User.objects.filter(mobile=mobile).exists():
            msg = "User with this Mobile Number already exists!!"
            return render(request, 'signup.html', {'msg': msg})
            
        if password == cpassword:
            User.objects.create(
                name=request.POST['name'],
                email=email,
                mobile=mobile,
                password=password,
                usertype=request.POST['usertype'] 
            )
            msg = "Signup Successfully!!"
            return render(request, 'signup.html', {'msg': msg})
        else:
            msg = "Password & confirm password does not match!!"
            return render(request, 'signup.html', {'msg': msg})

    else:
        return render(request, 'signup.html')


def login(request):
    if request.method=="POST":
        try:
            email = request.POST['email']
            password = request.POST['password']
            usertype = request.POST.get('usertype', 'customer')
            
            user = User.objects.get(email=email, usertype=usertype)
            print("****************",type(user.password))
            if user.password==password:
                print("*****************gaya he andar!!")
                request.session['email']=user.email
                return redirect('index')
            else:
                msg = "Password does not match!!"
                return render(request,'login.html',{'msg':msg})

        except User.DoesNotExist:
            msg = f"Email does not exist or user is not registered as {usertype}!!"
            return render(request,'login.html',{'msg':msg})
    
    else:
        return render(request,'login.html')
    
def logout(request):
    del request.session['email']
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

def agency_dashboard(request):
    try:
        user = User.objects.get(email=request.session.get('email'))
        if user.usertype != 'agency':
            return redirect('index')
    except:
        return redirect('login')
        
    cars = Car.objects.filter(agency=user)
    return render(request, 'agency_dashboard.html', {'user': user, 'cars': cars})

def add_car(request):
    try:
        user = User.objects.get(email=request.session.get('email'))
        if user.usertype != 'agency':
            return redirect('index')
    except:
        return redirect('login')
        
    if request.method == "POST":
        name = request.POST.get('name')
        number = request.POST.get('number')
        price = request.POST.get('price')
        routes = request.POST.get('routes')
        image = request.FILES.get('image')
        
        # Check if number plate already exists
        if Car.objects.filter(number=number).exists():
            msg = "A car with this registration number already exists!"
            return render(request, 'add_car.html', {'msg': msg, 'user': user})
            
        Car.objects.create(
            agency=user,
            name=name,
            number=number,
            price=price,
            routes=routes,
            image=image
        )
        return redirect('agency_dashboard')
        
    return render(request, 'add_car.html', {'user': user})

def remove_car(request, pk):
    try:
        user = User.objects.get(email=request.session.get('email'))
        if user.usertype != 'agency':
            return redirect('index')
    except:
        return redirect('login')
        
    try:
        car = Car.objects.get(pk=pk, agency=user)
        car.delete()
    except Car.DoesNotExist:
        pass
        
    return redirect('agency_dashboard')
