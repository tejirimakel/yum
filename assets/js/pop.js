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

$('#open-modal-button').on('click', showModal);
$('#open-modal-button2').on('click', showModal);


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



});        