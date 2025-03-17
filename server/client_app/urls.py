from django.urls import path
from .views import client_app

app_name = "client_app"
urlpatterns = [path('', client_app, name="server")]
