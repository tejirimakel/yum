document.addEventListener('DOMContentLoaded', function ()
{


 const mybutton = document.getElementById("btn-back-to-top");

    const scrollFunction1 = () => {
      if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
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
    setTimeout(showModal, 20000); // 5000 milliseconds (5 seconds)
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


});        