from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    #api call will happen, request.something
    #sahelis api
    #api will respond with output
    return render(request, 'index.html')
