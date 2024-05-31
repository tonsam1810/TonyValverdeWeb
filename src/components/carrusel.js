export function initializeCarousel() {
    document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.present-container-div');
      let currentIndex = 0;
  
      function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        const presentContainer = document.querySelector('.present-container');
        if (presentContainer) {
          presentContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        }
      }
  
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }
  
      setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    });
  }
  
  