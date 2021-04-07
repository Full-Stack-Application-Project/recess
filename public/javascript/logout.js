// function getUserId(event) {
//   event.preventDefault();
//   fetch("/api/users/loggedIn").then(function (response) {
//     return response.json().then(function (response) {
//       let id = response[0].id;
//       console.log(id);
//       editUser(id);
//     });
//   });
// }

// async function editUser(id) {
//   console.log(id);
//   const response = await fetch(`/api/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify({
//       loggedIn: "false"
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     logout();
//   } else {
//     alert(response.statusText);
//   }
// }

async function logout(event) {
  event.preventDefault();
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);