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
      alert(response.statusText);
    }
  }
}

// function userId() {
//   fetch("/api/users/loggedIn").then(function (response) {
//     return response.json().then(function (response) {
//       console.log(response);
//       console.log("above is line 28");
//       let id = response[0].id;
//       console.log(id);
//       changeLoggedIn(id);
      
//     }).catch(err => {
//       console.log(err);
//     });
//   });
// }

// async function changeLoggedIn(id) {
//   console.log(id);
//   const response = await fetch(`/api/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify({
//       loggedIn: "true"
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert(response.statusText);
//   }
// }

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);