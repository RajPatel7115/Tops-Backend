from .models import User, Wishlist, Cart

def user_context(request):
    user = None
    if 'email' in request.session:
        try:
            user = User.objects.get(email=request.session['email'])
            if user.usertype == 'customer':
                request.session['wishlist'] = Wishlist.objects.filter(user=user).count()
                request.session['cart_count'] = Cart.objects.filter(user=user, payment=False).count()
        except User.DoesNotExist:
            pass
    return {'app_user': user}
