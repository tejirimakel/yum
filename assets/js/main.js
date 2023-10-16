document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-btn');
    const closeButton = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    
    
    // Accordion
    const accordionButtons = document.querySelectorAll('#faq button');

    accordionButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
       
        button.classList.toggle('active');

        
        const description = button.nextElementSibling;
        description.classList.toggle('hidden');

        
        const icons = button.querySelectorAll('span svg');
        icons.forEach(icon => {
          icon.classList.toggle('hidden');
        });

        accordionButtons.forEach((otherButton, otherIndex) => {
          if (otherIndex !== index) {
            otherButton.classList.remove('active');
            const otherDescription = otherButton.nextElementSibling;
            otherDescription.classList.add('hidden');
            const otherIcons = otherButton.querySelectorAll('span svg');
            otherIcons.forEach(otherIcon => {
              otherIcon.classList.add('invisible');
            });
          }
        });
      });
    });

    // Slider
    const swiper = new Swiper(".nswiper", {
          grabCursor: true,
          spaceBetween: 10,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
          autoplay: {
       delay: 5000,
        },
    });
});
