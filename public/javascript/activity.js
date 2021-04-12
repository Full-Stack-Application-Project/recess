// this function gets the user id from the logged in user and passes it to addActivityFormHandler
function fetchUserId(event) {
  event.preventDefault();
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      let user_id = response[0].id;
      addActivityFormHandler(user_id);
    });
  });
}

// this function posts the activity the user selected to the activity table
async function addActivityFormHandler(user_id) {
  const activity_category = document.querySelector(".categoryName").innerHTML;
  const activity_length = document.querySelector(".activityLength").value;
  const activity_name = document.getElementById("activity-type").value.trim();

  if (activity_name && activity_length) {
    const response = await fetch("/api/activities", {
      method: "post",
      body: JSON.stringify({
        activity_category,
        activity_name,
        activity_length,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/categories");
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("activities").addEventListener("click", fetchUserId);
