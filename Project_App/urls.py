from django.urls import path
from .views import (
    home_page,
    header,
    about_page,
    contact_page,
    executive_page,
    panaroma_page,
    projects,
    baharan,
    render_faramrz,
)

urlpatterns = [
    path("", home_page, name='home'),
    path('header/', header, name='header'),
    path('about/', about_page, name='about'),
    path('contact/', contact_page, name='contact'),
    path('executive/', executive_page, name='executive'),
    path('panaroma/', panaroma_page, name='panaroma'),
    path('projects/', projects, name='projects'),
    path('baharan/', baharan, name='baharan'),
    path('render-faramrz/', render_faramrz, name='renderFaramrz'),
]