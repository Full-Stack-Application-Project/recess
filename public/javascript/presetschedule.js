// deletes the current schedule if there is one there
async function checkActivitiesTable(event) {
  event.preventDefault();
  fetch(`/api/schedules/`, {
    method: "DELETE",
  });
  getUserId();
}

// get the logged in users id and passes it to addScheduleFormHandler
function getUserId() {
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      let user_id = response[0].id;
      addScheduleFormHandler(user_id);
    });
  });
}

// adds the selected schedule information to the schedule tabel
async function addScheduleFormHandler(user_id) {
  let day;
  let working;
  let workMonday = document.getElementById("monday").checked;
  let workTuesday = document.getElementById("tuesday").checked;
  let workWednesday = document.getElementById("wednesday").checked;
  let workThursday = document.getElementById("thursday").checked;
  let workFriday = document.getElementById("friday").checked;
  let workSaturday = document.getElementById("saturday").checked;
  let workSunday = document.getElementById("sunday").checked;
  let sleep_start = document.querySelector("#sleepStartTime").value;
  let sleep_end = document.querySelector("#sleepEndTime").value;

  for (i = 0; i < 7; i++) {
    let work_start = document.querySelector("#workStartTime").value;
    let work_end = document.querySelector("#workEndTime").value;
    let newid;

    if (i === 0) {
      day = "Sunday";
      if (workSunday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 1) {
      day = "Monday";
      if (workMonday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 2) {
      day = "Tuesday";
      if (workTuesday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 3) {
      day = "Wednesday";
      if (workWednesday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 4) {
      day = "Thursday";
      if (workThursday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 5) {
      day = "Friday";
      if (workFriday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    } else if (i === 6) {
      day = "Saturday";
      if (workSaturday) {
        working = "yes";
      } else {
        working = "no";
        work_start = null;
        work_end = null;
      }
    }

    if (sleep_start && sleep_end) {
      const response = await fetch("/api/schedules", {
        method: "post",
        body: JSON.stringify({
          newid,
          day,
          working,
          work_start,
          work_end,
          sleep_start,
          sleep_end,
          user_id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log(day + " was added");
      } else {
        alert("Please select start and end times.");
        return;
      }
    }
  }
  document.location.replace("/schedule");
}

document.getElementById("save").addEventListener("click", checkActivitiesTable);
