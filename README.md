# WebPorto - Personal Portfolio Website

Selamat datang di repositori WebPorto! Ini adalah proyek website portofolio pribadi yang dibangun dengan backend *framework* Django dan di-*deploy* sebagai situs statis di GitHub Pages.

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan perpaduan teknologi yang kuat untuk memastikan performa maksimal dan kemudahan pengembangan:

*   **Python & Django**: *Framework* utama untuk menyusun struktur web, *routing*, dan menggunakan fitur *templating* yang sangat rapi.
*   **HTML5, CSS3, & JavaScript**: Bahasa inti untuk membangun antarmuka pengguna (UI) yang responsif, elegan, dan dinamis.
*   **Docker & Docker Compose**: Digunakan untuk isolasi (*containerization*), sehingga proyek ini dapat dijalankan di lingkungan lokal manapun tanpa khawatir *conflict* atau masalah *dependencies*.
*   **django-distill**: Sebuah pustaka Django krusial yang berfungsi untuk melakukan rendering aplikasi web Django dinamis menjadi sekumpulan file HTML statis (*static site generator*).
*   **ghp-import**: *Command line tool* praktis untuk mengekspor (push) folder hasil konversi situs langsung menuju *branch* `gh-pages` pada repositori GitHub.

## Isi Portofolio

Situs web ini berfokus pada *personal branding* dan etalase karya, yang meliputi:
*   **Profil Diri**: Informasi singkat mengenai profil profesional.
*   **Keahlian & Kemampuan (Skills)**: Daftar spesifik mengenai keahlian dalam *software development* atau *networking*.
*   **Koleksi Proyek**: Etalase proyek yang pernah dikerjakan lengkap dengan deskripsi fungsionalitasnya.
*   **CV dan Sertifikat**: Akses cepat bagi perekrut atau klien untuk melihat dokumen penghargaan profesional (disimpan secara statis/publik).
*   **Informasi Kontak**: Tautan menuju media sosial dan alamat surel (email).

## Menjalankan Web secara Lokal dengan Docker

Untuk mempermudah pengembangan, Anda tidak perlu repot menyetel virtual environment. Cukup gunakan Docker.

1.  Pastikan Anda telah menginstal dan menjalankan aplikasi **Docker**.
2.  Buka terminal/Command Prompt di dalam direktori (*root*) proyek ini.
3.  Jalankan perintah ajaib berikut:
    ```bash
    docker-compose up --build
    ```
4.  Docker akan melakukan persiapan (build). Setelah selesai, website bisa diakses melalui web browser favorit Anda di alamat: `http://localhost:8000` (atau port yang tertera pada log terminal).

## Panduan Build & Deploy ke GitHub Pages

Proses *deployment* pada proyek ini mengandalkan `django-distill` untuk mengubah web Django yang dinamis menjadi *file* murni statis agar kompatibel untuk di-hosting secara gratis di GitHub Pages.

Ikuti urutan *command* berikut (dijalankan di dalam folder `webporto` di mana file `manage.py` berada):

### 1. Build Menjadi Situs Statis
```bash
python manage.py distill-local dist --force --collectstatic
```
**Detail Perintah:**
*   `--collectstatic`: Memicu Django untuk otomatis mengumpulkan semua aset (seperti CSS, gambar, dan JavaScript) ke dalam *folder* perantara `staticfiles/` dengan versi paling baru.
*   `dist`: Nama folder target di mana HTML statis akan diletakkan.
*   `--force`: Memberi instruksi untuk secara paksa menghapus dan membuat ulang folder `dist/` bila sudah pernah di-*build* sebelumnya.

### 2. Deploy (Push) ke Branch GitHub Pages
```bash
ghp-import -n -p -f dist
```
**Detail Perintah:**
*   `-n`: Otomatis menyertakan file `.nojekyll`, fungsinya untuk memberi tahu server GitHub bahwa folder ini adalah murni kode web, tidak perlu di-*build* menggunakan mesin Jekyll bawaan GitHub.
*   `-p`: Memerintahkan sistem agar langsung melakukan `git push` ke *remote server*.
*   `-f`: Memaksa (*force*) git untuk memperbarui *branch* `gh-pages`.

Setelah perintah di atas berhasil, berikan waktu kurang lebih 1-2 menit hingga GitHub selesai memproses, dan portofolio statis akan online (hidup) dan bisa dikunjungi publik melalui tautan GitHub Pages (contoh: `https://<username>.github.io/<nama-repo>/`).
