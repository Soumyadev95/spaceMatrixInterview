var loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const validationRules = {
    email: {},
    password: {
      minlength: 8,
      regex,
    },
  };
});
console.log(loginForm);
