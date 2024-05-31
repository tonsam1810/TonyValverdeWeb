export function initializeCarousel() {
    document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.present-container-div') as NodeListOf<HTMLElement>;
      let currentIndex = 0;
  
      function showSlide(index: number) {
        const slideWidth = slides[0].clientWidth;
        const presentContainer = document.querySelector('.present-container') as HTMLElement;
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