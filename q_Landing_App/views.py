from django.shortcuts import render
from django.http import HttpResponse

from django.core.files.storage import FileSystemStorage
def index(request):
    #api call will happen, request.something
    if request.method == "POST":
        myfile = request.FILES['pdlfile']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        filepath = fs.url(filename)
        # TODO now do whatever you want to with the file path


    #sahelis api
    #api will respond with output
    return render(request, 'index.html')
