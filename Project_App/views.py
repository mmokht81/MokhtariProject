from django.shortcuts import render

# Create your views here.

def home_page(request):
    return render(request, 'MokhtariProject/home-page.html')

def about_page(request): 
    return render(request, 'MokhtariProject/about-page.html')

def contact_page(request):
    return render(request, 'MokhtariProject/contact-page.html')

def executive_page(request):
    return render(request, 'MokhtariProject/executive-pics.html')

def header(request):
    return render(request, 'MokhtariProject/header.html')

def panaroma_page(request):
    return render(request, 'MokhtariProject/panaroma-page.html')

def projects(request):
    return render(request, 'MokhtariProject/projects.html')

def baharan(request):
    return render(request, 'MokhtariProject/baharan.html')

def render_faramrz(request):
    return render(request, 'MokhtariProject/render-faramrz.html')