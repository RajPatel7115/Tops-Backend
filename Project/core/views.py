from django.shortcuts import render


def index(request):
    """Home page with hero, offers, popular routes"""
    return render(request, 'core/index.html')


def search(request):
    """Search results page with filters"""
    return render(request, 'core/search.html')


def seats(request):
    """Seat selection page"""
    return render(request, 'core/seats.html')


def booking(request):
    """Booking & payment page"""
    return render(request, 'core/booking.html')


def confirmation(request):
    """Booking confirmation page"""
    return render(request, 'core/confirmation.html')


def offers(request):
    """Offers page"""
    return render(request, 'core/offers.html')


def advance(request):
    """30-day advance booking page"""
    return render(request, 'core/advance.html')


def charter(request):
    """Charter a bus page"""
    return render(request, 'core/charter.html')


def my_trips(request):
    """My trips / booking history"""
    return render(request, 'core/my-trips.html')


def track(request):
    """Track your bus page"""
    return render(request, 'core/track.html')


def support(request):
    """Support / help page"""
    return render(request, 'core/support.html')


def admin_dashboard(request):
    """Admin dashboard page"""
    return render(request, 'core/admin.html')


def page_not_found(request):
    """Custom 404 page"""
    return render(request, 'core/404.html')
