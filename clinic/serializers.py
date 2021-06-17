from clinics.models import Clinic, Doctor
from rest_framework import serializers


class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Doctor
        fields = ['first_name', 'last_name']


class ClinicSerializer(serializers.HyperlinkedModelSerializer):
    doctors = DoctorSerializer(many=True, read_only=True)

    class Meta:
        model = Clinic
        fields = ['name', 'street_address', 'city', 'state', 'doctors']