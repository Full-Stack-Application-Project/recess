// add the users information to the user table
async function signupFormHandler(event) {
    event.preventDefault();
    const firstname = document.querySelector("#first-name").value.trim();
    const lastname = document.querySelector("#last-name").value.trim();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    const loggedIn = "true";

    if (firstname && lastname && email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          loggedIn
        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("There is already a user with this email address, please enter a new email address or go to the login page.");
      }
    }
  }

  document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);