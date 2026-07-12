from django.urls import path
from . import views


urlpatterns = [
    path('', views.home_page, name='homePage'),
    path('header/', views.header, name='header'),
    path('about/', views.about_page, name='aboutPage'),
    path('contact/', views.contact_page, name='contactPage'),
    path('executive/', views.executive_page, name='executivePage'),
    path('panaroma/', views.panaroma_page, name='panaromaPage'),
    path('projects/', views.projects, name='projectsPage'),
    path('baharan/', views.baharan, name='baharan'),
    path('render-faramrz/', views.render_faramrz, name='renderFaramrzPage'),
]