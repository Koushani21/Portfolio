document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  alert('Thank you for your message! I will get back to you soon.');
  this.reset(); // Clear the form
});
