from django.urls import path, include

from . import views


urlpatterns = [
    path('view', views.ProfileRetrieveView.as_view(), name='view_profile'),
    path('update', views.ProfileUpdateView.as_view(), name='update_profile'),
]
