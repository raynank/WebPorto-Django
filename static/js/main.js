/* 
=========================================
DOKUMENTASI JAVASCRIPT (main.js)
=========================================
File ini mengatur interaktivitas di halaman web Anda (seperti klik menu di HP dan animasi scroll).
Bug "navbar merenggang" (efek padding berubah saat scroll) telah Dihapus sepenuhnya dari sini.
*/

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Logika untuk Menu Mobile (Burger Icon)
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
      burger.addEventListener('click', function() {
        // Menambah/menghapus class 'active' untuk menampilkan/menyembunyikan menu
        navLinks.classList.toggle('active');
      });
  
      // Menutup menu mobile saat salah satu tautan diklik
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }
    
    // 2. Smooth Scrolling untuk Tautan Anchor (misal klik "Experience" meluncur ke bagiannya)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah lompatan standar
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Melakukan scroll dengan margin 80px dari atas agar tidak tertutup navbar
          window.scrollTo({
            top: targetElement.offsetTop - 80, 
            behavior: 'smooth'
          });
        }
      });
    });

    /* 
=========================================
4. FITUR BUKA/TUTUP SERTIFIKAT
=========================================
*/
const toggleCertsBtn = document.getElementById('toggle-certs');
const linkedinCertsBtn = document.getElementById('linkedin-certs');
const extraCerts = document.querySelectorAll('.extra-cert');

if (toggleCertsBtn) {
  toggleCertsBtn.addEventListener('click', () => {
    // Cek apakah sertifikat sedang disembunyikan
    const isHidden = extraCerts[0].style.display === 'none';

    if (isHidden) {
      // Munculkan semua sertifikat tersembunyi
      extraCerts.forEach(cert => cert.style.display = 'block');
      
      // Ubah teks tombol jadi Tutup
      toggleCertsBtn.textContent = 'Tutup Sertifikat';
      
      // Munculkan tombol Linkedin
      linkedinCertsBtn.style.display = 'inline-block';
    } else {
      // Sembunyikan kembali
      extraCerts.forEach(cert => cert.style.display = 'none');
      
      // Kembalikan teks tombol awal
      toggleCertsBtn.textContent = 'Lihat Semua Sertifikat';
      
      // Sembunyikan tombol Linkedin
      linkedinCertsBtn.style.display = 'none';
      
      // Scroll kembali ke atas bagian sertifikasi agar rapi
      document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* 
=========================================
5. FITUR SCROLL TO TOP
=========================================
*/
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    // Tampilkan tombol jika scroll > 300px
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    // Scroll mulus ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 3. Highlight Menu Aktif Saat Di-scroll
const sections = document.querySelectorAll('section'); 
const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
      let currentId = '';
      
      // Deteksi section mana yang sedang dilihat di layar
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
          currentId = section.getAttribute('id');
        }
      });
      
      // Berikan warna biru (active) pada tautan navbar yang sesuai
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    });
  
  });
  
