// this function logs the user into the app 
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
        loggedIn: "true"
      }),
      headers: { "Content-Type": "application/json" },
    });
    
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Either the email address or password is not entered correctly");
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);