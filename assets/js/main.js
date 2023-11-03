document.addEventListener('DOMContentLoaded', function ()
{
    const mobileMenu = document.getElementById("mobile-menu");
            const menuBtn = document.getElementById("menu-btn");
            const closeBtn = document.getElementById("close-btn");
            const menuIcon = menuBtn.querySelector('svg');
            const closeIcon = closeBtn.querySelector('svg');

            menuBtn.addEventListener("click", function() {
                mobileMenu.classList.toggle("hidden");
                menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
            });

            closeBtn.addEventListener("click", function() {
                mobileMenu.classList.toggle("hidden");
                closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
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


    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });



        function startCounter(id, startValue, endValue) {
      let count = startValue;
      const element = document.getElementById(id);
      const interval = setInterval(() => {
        element.textContent = count + '+';
        if (count === endValue) {
          clearInterval(interval);
        }
        count++;
      }, 100);
    }

    const counterSection = document.getElementById('stats');
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
    
    let countersStarted = false;

    function checkCounterSection() {
      const rect = counterSection.getBoundingClientRect();
      const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

      if (isVisible && !countersStarted) {
        startCounter('counter1', 0, 100);
        startCounter('counter2', 90000000, 100000000);
        startCounter('counter3', 0, 16);
        countersStarted = true;
      }
    }

    window.addEventListener('scroll', checkCounterSection);
    window.addEventListener('resize', checkCounterSection);


    checkCounterSection();


    let num = setInterval(updated);
        let upto = 0;
        function updated() {
            let count = document.getElementById("start-number");
            count.innerHTML = ++upto + "+";
            if (upto === 10000) {
                clearInterval(num);
            }
        }




    const mybutton = document.getElementById("btn-back-to-top");

    const scrollFunction1 = () => {
      if (
        document.body.scrollTop > 1600 ||
        document.documentElement.scrollTop > 1600
      ) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    };
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    window.addEventListener("scroll", scrollFunction1);

        // Get the button
    const gbbtn = document.getElementById("gbbtn");

    // When the user scrolls down 20px from the top of the document, show the button

    const scrollFunction2 = () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        gbbtn.classList.remove("hidden");
      } else {
        gbbtn.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", scrollFunction2);

});