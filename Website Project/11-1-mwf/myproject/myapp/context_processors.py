from .models import User

def user_context(request):
    if request.path.startswith('/admin/'):
        return {}
        
    if 'email' in request.session:
        try:
            user = User.objects.get(email=request.session['email'])
            return {'user': user}
        except User.DoesNotExist:
            pass
    return {}
