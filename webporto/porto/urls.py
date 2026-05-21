"""
DOKUMENTASI FILE: urls.py
Fungsi utama file ini adalah sebagai "Peta Navigasi" (URL Routing).
Ketika seseorang mengetikkan alamat web Anda (contoh: localhost:8000/), file ini akan mengecek alamat tersebut.
- path('admin/', ...) -> Mengarahkan ke panel admin bawaan Django.
- path('', ...) -> URL kosong berarti halaman utama (beranda). Ia akan memanggil fungsi `index` dari `views.py`.
"""
from django.contrib import admin
from django.urls import path
from base import views
from django_distill import distill_path

def get_index():
    # Fungsi pembantu untuk django-distill: mengembalikan None karena rute tidak membutuhkan parameter URL
    return None

urlpatterns = [
    # Halaman admin panel
    path('admin/', admin.site.urls),
    # Halaman utama portofolio (menggunakan distill_path untuk ekspor statis)
    distill_path('', views.index, name='index', distill_func=get_index),
]
