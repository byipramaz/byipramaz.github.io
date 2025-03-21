// Buton ve sol bar öğelerini seç
const menuToggle = document.getElementById('menuToggle');
const sideBar = document.getElementById('sideBar');

// Butona tıklama olayını ekle
menuToggle.addEventListener('click', function() {
    // Sol barın sınıfını değiştirerek açma/kapanma işlemi yap
    sideBar.classList.toggle('open');
});