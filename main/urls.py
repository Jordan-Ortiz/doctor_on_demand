from django.urls import include, path
from rest_framework import routers
from clinics import views

router = routers.DefaultRouter()
router.register(r'clinics', views.ClinicViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
