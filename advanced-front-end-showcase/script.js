document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
// if user clicks outside disappers
document.addEventListener("click", (e) => {
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const form = document.querySelector('.register-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input');
  let valid = true;


  form.querySelectorAll('.error-msg').forEach(el => el.remove());
  inputs.forEach(input => input.classList.remove('input-error'));

  inputs.forEach(input => {
    if (input.hasAttribute('required') || input.type === 'email') {
      const value = input.value.trim();
      const error = document.createElement('div');
      error.classList.add('error-msg');

      if (value === '') {
        error.innerText = `${input.placeholder} is required`;
        input.classList.add('input-error');
        input.after(error);
        valid = false;
      } else if (input.type === 'email' && (!value.includes('@') || !value.includes('.'))) {
        error.innerText = `Enter a valid email`;
        input.classList.add('input-error');
        input.after(error);
        valid = false;
      }
    }
  });

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
