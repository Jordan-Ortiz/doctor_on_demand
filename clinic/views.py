from clinic.models import Clinic, Doctor, Nurse
from rest_framework import viewsets
from clinic.serializers import ClinicSerializer, NurseSerializer, DoctorSerializer


class ClinicViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Clinics
    """
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Doctors
    """
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class NurseViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Nurses
    """
    queryset = Nurse.objects.all()
    serializer_class = NurseSerializer