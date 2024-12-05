// JavaScript for Forgot Password Page
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById('email').value.trim();
  const message = document.getElementById('message');

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
      alert("Please enter a valid email address!");
      return;
  }

  // Show success message
  message.textContent = "A password reset link has been sent to your email!";
  message.classList.remove('hidden');
});


document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('email').value.trim();
  const formData = new FormData();
  formData.append('email', emailInput);

  fetch('forgot_password.php', {
      method: 'POST',
      body: formData,
  })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              alert(data.message);
          } else {
              alert(data.message);
          }
      })
      .catch(error => console.error('Error:', error));
});

