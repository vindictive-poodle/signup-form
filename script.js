"use strict";


function confirmEqual() {
  const userPassword = document.getElementById('password');
  const confirmPassword = document.getElementById('cfm-password');
  if (userPassword.value === confirmPassword.value) {
    userPassword.setCustomValidity('');
    confirmPassword.setCustomValidity('');
  } else {
    userPassword.setCustomValidity('Invalid field.');
    confirmPassword.setCustomValidity('Invalid field.');
  }
  console.log(`userPassword: ${userPassword.value}`);
  console.log(`confirmPassword: ${confirmPassword.value}`);
}


document.addEventListener('DOMContentLoaded', () => {
  const pwd = document.getElementById('cfm-password');
  pwd.addEventListener('input', confirmEqual);
});
