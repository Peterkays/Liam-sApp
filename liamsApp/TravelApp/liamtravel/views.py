from django.shortcuts import render

from django.urls import path
from . import views

urlpatterns = [
    path('destinations/', views.destination_list, name='destination_list'),
    path('users/', views.user_list, name='user_list'),
]

