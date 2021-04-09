var sleepStartArr = [];
var sleepEndArr = [];

function getUserId(event) {
  event.preventDefault();
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      let user_id = response[0].id;
      console.log(user_id);
      addSleepScheduleFormHandler(user_id);
    });
  });
}

async function addSleepScheduleFormHandler(user_id) {
  let sleep_start;
  let sleep_end;

  if (window.location.pathname === '/sleepschedule') {
    sleep_start = document.querySelector("#sleepStartTime").value;
    sleep_end = document.querySelector("#sleepEndTime").value;
  }

  for (i = 0; i < 7; i++) {
      sleepStartArr.push(sleep_start);
      sleepEndArr.push(sleep_end);
    }

/*     if (sleep_start && sleep_end) {
      const response = await fetch("/api/schedules", {
        method: "post",
        body: JSON.stringify({
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
        alert('Please select start and end times.');
        return;
      }
    } */
  
  document.location.replace("/workschedule");
}

document.getElementById("save").addEventListener("click", getUserId);

export var { sleepStartArr, sleepEndArr };