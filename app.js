document.addEventListener("DOMContentLoaded", function () {

  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Registration
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some(user => user.email === email)) {
        alert("This email is already registered.");
        return;
      }

      users.push({
        name: name,
        email: email,
        password: password
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Please log in.");
      window.location.href = "login.html";
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const user = users.find(
        u => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect email or password.");
      }
    });
  }

});
