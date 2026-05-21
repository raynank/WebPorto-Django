"""
DOKUMENTASI FILE: views.py
Fungsi utama file ini adalah mengatur "Logika Tampilan" (Views).
Setiap kali seseorang membuka link website Anda, Django akan memanggil fungsi di file ini.
Di sini, fungsi `index` bertugas untuk mengambil file `index.html` dan menampilkannya ke layar browser.
"""
from django.shortcuts import render

def index(request):
    # Mengembalikan (merender) file HTML bernama index.html
    return render(request, 'index.html')
