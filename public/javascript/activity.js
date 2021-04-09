function fetchUserId(event) {
  event.preventDefault();
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      console.log(response);
      console.log("got to presetschedule.js line35");
      let user_id = response[0].id;
      console.log(user_id);
      addActivityFormHandler(user_id);
    });
  });
}

async function addActivityFormHandler(user_id) {
  const activity_category = document.querySelector(".categoryName").innerHTML;
  const activity_length = document.querySelector(".activityLength").value;
  const activity_name = document.getElementById("activity-type").value.trim();

  console.log(activity_category);
  console.log(activity_name);
  console.log(activity_length);
  console.log(user_id);

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
