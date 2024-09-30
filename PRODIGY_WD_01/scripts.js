document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showLogin = document.getElementById('showLogin');
  const showRegister = document.getElementById('showRegister');

  showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
  });

  showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
  });

  registerForm.style.display = 'block';
  loginForm.style.display = 'none';

  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      window.location.href = 'welcome.html';
  });

  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Registration successful! Please log in.');
      showLogin.click();
  });
});
