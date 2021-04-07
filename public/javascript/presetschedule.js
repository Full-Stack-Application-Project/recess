async function addScheduleFormHandler(event) {
    event.preventDefault();
    let day;
    let working;
    let workMonday = document.getElementById("monday").checked;
    let workTuesday = document.getElementById("tuesday").checked;
    let workWednesday = document.getElementById("wednesday").checked;
    let workThursday = document.getElementById("thursday").checked;
    let workFriday = document.getElementById("friday").checked;
    let workSaturday = document.getElementById("saturday").checked;
    let workSunday = document.getElementById("sunday").checked;
    let work_start = document.querySelector("#work_start").value;
    let work_end = document.querySelector("#work_end").value;
    let sleep_start = document.querySelector("#sleep_start").value;
    let sleep_end = document.querySelector("#sleep_end").value;
    let user_id = 1;
  
    console.log(workMonday + " workMonday");
    console.log(workMonday + " workTuesday");
    console.log(workMonday + " workWednesday");
    console.log(workMonday + " workThursday");
    console.log(workMonday + " workFriday");
    console.log(workMonday + " workSaturday");
    console.log(workMonday + " workSunday");
    console.log(work_start + " work_start");
    console.log(work_end + " work_end");
    console.log(sleep_start + " sleep_start");
    console.log(sleep_end + " sleep_end");
    console.log(user_id + " user_id");

    for (i = 0; i < 7; i++) {
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
            day,
            working,
            work_start,
            work_end,
            sleep_start,
            sleep_end,
            user_id
          }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          console.log(day + " was added");
        } else {
          alert(response.statusText);
        }
      }
    }
    document.location.replace("/schedule");
  }
  
  document
    .getElementById("save")
    .addEventListener("click", addScheduleFormHandler);