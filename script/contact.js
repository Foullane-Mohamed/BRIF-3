document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const dynamicFields = document.getElementById('dynamicFields');
    const addFieldButton = document.getElementById('addFieldButton');
  
    addFieldButton.addEventListener('click', function () {
      const newField = document.createElement('div');
      newField.className = 'form-group';
  
      
  
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'additionalField';
      input.placeholder = 'Enter additional information';
      newField.appendChild(input);
  
      dynamicFields.appendChild(newField);
    });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Form submitted!');
      // You can handle the form submission here (e.g., send data to the server)
    });
  });
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const formMessage = document.getElementById('form-message');

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          formMessage.style.color = 'green';
          formMessage.textContent = 'Your message has been sent successfully!';
          form.reset();
      } else {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Failed to send message. Please try again later.';
      }
  }).catch(error => {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Failed to send message. Please try again later.';
      console.error('Error:', error);
  });
});
// navbar

function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdownMenu = document.querySelector('.dropdown-menu');
      dropdownMenu.classList.toggle('show');
  });
});