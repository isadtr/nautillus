$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".gallery img");
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        document.querySelector(".slide").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // 3 segundos por slide
});


let currentIndex = 0;
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const totalImages = images.length;

    function showSlide(index) {
      if (index >= totalImages) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = totalImages - 1;
      } else {
        currentIndex = index;
      }
      slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // Muda automaticamente a cada 5 segundos

    // Inicializa o carrossel
    showSlide(currentIndex);
