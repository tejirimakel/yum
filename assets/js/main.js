document.addEventListener('DOMContentLoaded', function ()
{


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

    


    const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menuIcon = menuBtn.querySelector('svg');
const closeIcon = closeBtn.querySelector('svg');

let isMenuOpen = false; // Track the menu state

menuBtn.addEventListener("click", function() {
    if (isMenuOpen) {
        // Close the menu
        closeMenu();
    } else {
        // Open the menu
        openMenu();
    }
});

closeBtn.addEventListener("click", function() {
    // Close the menu when the close button is clicked
    if (isMenuOpen) {
        closeMenu();
    }
});

function openMenu() {
    // Ensure the menu is not hidden
    mobileMenu.classList.remove("hidden");

    // Add animation classes to open the menu
    mobileMenu.classList.remove("animate__fadeOutUp");
    mobileMenu.classList.add("animate__animated", "animate__fadeInDown", "animate__slow");
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';

    // Menu is now open
    isMenuOpen = true;
}

function closeMenu() {
    // Add animation classes to close the menu
    mobileMenu.classList.remove("animate__animated", "animate__fadeInDown", "animate__slow");
    mobileMenu.classList.add("animate__animated", "animate__fadeOutUp", "animate__slow");
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    // Add a delay to hide the menu after the animation finishes
    setTimeout(() => {
        mobileMenu.classList.toggle("hidden");
    }, 1000); // Adjust the delay based on your animation duration

    // Menu is now closed
    isMenuOpen = false;
}



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
     

     

    function showModal() {
        $('#modal-example').fadeIn();
    }

    // Delay showing the modal by 5 seconds
    $(document).ready(function () {
        setTimeout(showModal, 5000); // 5000 milliseconds (5 seconds)
    });

    // Function to hide the modal with a fade-out effect
    function hideModal() {
        $('#modal-example').fadeOut();
    }

    $('#modal-example button[data-dismiss="modal"]').on('click', hideModal);


    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // Check if the key code is 27 (Esc key)
            hideModal();
        }
    });    


var num; // Declare the interval variable.
var upto = 0;
var speed = 100; // Set the initial speed in milliseconds (e.g., 100ms for faster counting).
var countingElement = document.getElementById("start-number");

function updated() {
    countingElement.innerHTML = ++upto + "+";
    
    if (upto === 10000000) {
        clearInterval(num);
    }
}

function setSpeed(newSpeed) {
    speed = newSpeed;
    
    // If the interval is already running, clear it and start a new one with the updated speed.
    if (num) {
        clearInterval(num);
        num = setInterval(updated, speed);
    }
}

// Start the initial interval
num = setInterval(updated, speed);




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

 
    function startCounter(id, startValue, endValue, speed) {
  let count = startValue;
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    element.textContent = count + '+';
    if (count === endValue) {
      clearInterval(interval);
    } else {
      count++;
    }
  }, speed);
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
    startCounter('counter1', 0, 100, 50); // Speed in milliseconds (e.g., 100ms for faster counting).
    startCounter('counter2', 97999999, 100000000, 5);
    startCounter('counter3', 0, 16, 200);
    countersStarted = true;
  }
}

window.addEventListener('scroll', checkCounterSection);
window.addEventListener('resize', checkCounterSection);

checkCounterSection();




  
const section = document.getElementById("resources");
  const bx1 = document.getElementById("bx1");
  const bx2 = document.getElementById("bx2");
  const bx3 = document.getElementById("bx3");

  // Add an event listener to the window for scroll events
  window.addEventListener("scroll", function() {
    // Get the position of the section and the scroll position
    const sectionTop = section.offsetTop;
    const scrollPosition = window.scrollY;

    // Define an offset (adjust this value as needed)
    const offset = 800;

    // Check if the user has scrolled to the section
    if (scrollPosition > sectionTop - offset) {
      // Add the animation classes to the target elements
      bx1.classList.add("animate__animated", "animate__slideInUp", "animate__delay-2s");
      bx2.classList.add("animate__animated", "animate__slideInUp", "animate__delay-3s");
      bx3.classList.add("animate__animated", "animate__slideInUp", "animate__delay-4s");
    }
  });

   const faqSection = document.getElementById("faq");

  // Add an event listener to the window for scroll events
  window.addEventListener("scroll", function() {
    // Get the position of the faq section and the scroll position
    const faqSectionTop = faqSection.offsetTop;
    const scrollPosition = window.scrollY;

    // Define an offset (adjust this value as needed)
    const offset = 800;

    // Check if the user has scrolled to the faq section
    if (scrollPosition > faqSectionTop - offset) {
      // Add the animation class to the faq section
      faqSection.classList.add("animate__animated", "animate__slideInUp", "animate__slow");
    }
  });

});