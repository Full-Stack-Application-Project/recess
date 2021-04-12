// gets the current logged in user id before they log out and passes that to editUser
function getUserId(event) {
  event.preventDefault();
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      let id = response[0].id;
      editUser(id);
      
    }).catch(err => {
      console.log(err);
    });
  });
}

// change the logged in parameter for the user that is currently logged in back to false
async function editUser(id) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      loggedIn: "false"
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    logout();
  } else {
    alert(response.statusText);
  }
}

// logs out user
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

document.querySelector("#logout").addEventListener("click", getUserId);