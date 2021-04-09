async function checkActivitiesTable(event) {
  event.preventDefault();
  console.log("got to checkActivitiesTable");
  fetch("api/schedules/1").then(function (response) {
    return response.json().then(function (response) {
      console.log(response.message);
      console.log("above is line 6");
      if (!response.message) {
        console.log("got to line 7 of preset schedule");
        deleteSchedules();
      } else {
        getUserId();
      }
    });
  });
}

function deleteSchedules() {
  for (i = 1; i <= 7; i++) {
    const response = fetch(`/api/schedules/${i}`, {
      method: "DELETE",
    });
  }
  getUserId();
}

function getUserId() {
  fetch("/api/users/loggedIn").then(function (response) {
    return response.json().then(function (response) {
      console.log(response);
      console.log("got to presetschedule.js line 35");
      let user_id = response[0].id;
      // let user_id = 1;
      console.log(user_id);
      addScheduleFormHandler(user_id);
    });
  });
}

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

  console.log(workMonday + " workMonday");
  console.log(workTuesday + " workTuesday");
  console.log(workWednesday + " workWednesday");
  console.log(workThursday + " workThursday");
  console.log(workFriday + " workFriday");
  console.log(workSaturday + " workSaturday");
  console.log(workSunday + " workSunday");
  console.log(sleep_start + " sleep_start");
  console.log(sleep_end + " sleep_end");
  console.log(user_id + " user_id");

  for (i = 0; i < 7; i++) {
    let work_start = document.querySelector("#workStartTime").value;
    let work_end = document.querySelector("#workEndTime").value;
    let newid;

    console.log(work_start + " work_start");
    console.log(work_end + " work_end");
    if (i === 0) {
      day = "Sunday";
      if (workSunday) {
        newid = 1;
        working = "yes";
      } else {
        newid = 1;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("sunday happened");
    } else if (i === 1) {
      day = "Monday";
      if (workMonday) {
        newid = 2;
        working = "yes";
      } else {
        newid = 2;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("monday happened");
    } else if (i === 2) {
      day = "Tuesday";
      if (workTuesday) {
        newid = 3;
        working = "yes";
      } else {
        newid = 3;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("tuesday happened");
    } else if (i === 3) {
      day = "Wednesday";
      if (workWednesday) {
        newid = 4;
        working = "yes";
      } else {
        newid = 4;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("wednesday happened");
    } else if (i === 4) {
      day = "Thursday";
      if (workThursday) {
        newid = 5;
        working = "yes";
      } else {
        newid = 5;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("thursday happened");
    } else if (i === 5) {
      day = "Friday";
      if (workFriday) {
        newid = 6;
        working = "yes";
      } else {
        newid = 6;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("friday happened");
    } else if (i === 6) {
      day = "Saturday";
      if (workSaturday) {
        newid = 7;
        working = "yes";
      } else {
        newid = 7;
        working = "no";
        work_start = null;
        work_end = null;
      }
      console.log("saturday happened");
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
      console.log(response);
      if (response.ok) {
        console.log(day + " was added");
      } else {
        alert("Please select start and end times.");
        return;
      }
    }
  }
  // document.location.replace("/schedule");
}

document.getElementById("save").addEventListener("click", checkActivitiesTable);
