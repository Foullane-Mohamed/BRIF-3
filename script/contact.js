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
