from clinics.models import Clinic
from rest_framework import viewsets
from clinics.serializers import ClinicSerializer


class ClinicViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Clinics
    """
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer