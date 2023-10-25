document.addEventListener('DOMContentLoaded', function ()
{
  const menuButton = document.getElementById('menu-btn');
  const closeButton = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', function ()
  {
    mobileMenu.classList.toggle('hidden');
  });

  closeButton.addEventListener('click', function ()
  {
    mobileMenu.classList.toggle('hidden');
  });


  // Accordion
  const accordionButtons = document.querySelectorAll('#faq button');

  accordionButtons.forEach((button, index) =>
  {
    button.addEventListener('click', () =>
    {

      button.classList.toggle('active');


      const description = button.nextElementSibling;
      description.classList.toggle('hidden');


      const icons = button.querySelectorAll('span svg');
      icons.forEach(icon =>
      {
        icon.classList.toggle('hidden');
      });

      accordionButtons.forEach((otherButton, otherIndex) =>
      {
        if (otherIndex !== index)
        {
          otherButton.classList.remove('active');
          const otherDescription = otherButton.nextElementSibling;
          otherDescription.classList.add('hidden');
          const otherIcons = otherButton.querySelectorAll('span svg');
          otherIcons.forEach(otherIcon =>
          {
            otherIcon.classList.add('invisible');
          });
        }
      });
    });
  });

  // Slider
  const swiper = new Swiper(".nswiper",
  {
    grabCursor: true,
    spaceBetween: 10,
    loop: true,
    parallax: true,
    pagination:
    {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay:
    {
      delay: 5000,
    },
  });
     

    const buttonClose = document.querySelectorAll('[data-dismiss="modal"]')
    const modal = document.querySelector('.modal');
    const trigger = document.querySelector('[data-toggle="modal"]');

    // Show modal on window load
    window.addEventListener('load', () => {
      showModal(modal);
    });

    // Function to show the modal
    function showModal(modal) {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('show');
      }, 100);
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('astroui-modal-open');
    }

    // Function to dismiss the modal
    function dismissModal(modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 200);
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      document.body.classList.remove('astroui-modal-open');
    }

    const getDismiss = (buttonClose, modal) => {
        buttonClose.addEventListener('click', () => {
        dismissModal(modal)
        })
    }
    
    buttonClose.forEach((buttonClose) => {
        getDismiss(buttonClose, modal)
    })

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('show')) {
        dismissModal(modal);
      }
    });

});