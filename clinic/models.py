from django.db import models


class Clinic(models.Model):
    name = models.CharField(max_length=100)
    street_address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    clinic = models.ForeignKey(Clinic, related_name='doctors', on_delete=models.CASCADE)


class Nurse(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    clinic = models.ForeignKey(Clinic, related_name='nurses', on_delete=models.CASCADE)



