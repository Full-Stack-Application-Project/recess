async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
    req.session.user_id;
    req.session.email;
    req.session.loggedIn;
    console.log("above is lines 22-24 of login.js");
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  if (firstName & lastName && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("user posted");

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);