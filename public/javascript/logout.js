// function getUserId(event) {
//   event.preventDefault();
//   fetch("/api/users/loggedIn").then(function (response) {
//     return response.json().then(function (response) {
//       console.log(response);
//       console.log("got to presetschedule.js line35");
//       let id = response[0].id;
//       console.log(id);
//       editUser(id);
//     });
//   });
// }

// async function editUser(id) {
//   const response = await fetch(`/api/users/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       id 
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard/');
//   } else {
//     alert(response.statusText);
//   }
// }

async function logout() {
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