from .models import User, Wishlist

def user_context(request):
    user = None
    if 'email' in request.session:
        try:
            user = User.objects.get(email=request.session['email'])
            if user.usertype == 'customer':
                request.session['wishlist'] = Wishlist.objects.filter(user=user).count()
        except User.DoesNotExist:
            pass
    return {'app_user': user}
