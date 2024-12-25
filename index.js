// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// Contact

// Select the form and the form message div
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Add form submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Clear previous message
  formMessage.textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const countryCode = document.getElementById('country-code').value.trim();
  const whatsappNumber = document.getElementById('whatsapp-number').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate form fields
  if (name === '') {
    formMessage.textContent = 'Name is required';
    return;
  }

  if (email === '') {
    formMessage.textContent = 'Email is required';
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address';
    return;
  }

  if (countryCode === '') {
    formMessage.textContent = 'Country code is required';
    return;
  }

  if (whatsappNumber === '') {
    formMessage.textContent = 'WhatsApp number is required';
    return;
  }

  // Validate WhatsApp number format
  const whatsappPattern = /^[\d\s]+$/;
  if (!whatsappPattern.test(whatsappNumber)) {
    formMessage.textContent = 'Please enter a valid WhatsApp number';
    return;
  }

  if (message === '') {
    formMessage.textContent = 'Message is required';
    return;
  }

  // If validation passes, show success message
  alert('Form submitted successfully!');

  // Optionally, here you can send the form data to the server using AJAX or fetch.
  // Example:
  /*
  fetch('your-server-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, countryCode, whatsappNumber, message }),
  })
  .then(response => response.json())
  .then(data => {
    formMessage.textContent = 'Your message has been sent!';
  })
  .catch(error => {
    formMessage.textContent = 'There was an error sending your message.';
  });
  */

  // Reset the form fields after submission
  form.reset();
});

/* Back To Up Button */

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
