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

urlpatterns = [
    # Halaman admin panel
    path('admin/', admin.site.urls),
    # Halaman utama portofolio
    path('', views.index, name='index'),
]
