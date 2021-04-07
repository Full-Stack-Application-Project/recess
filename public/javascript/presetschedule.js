async function addScheduleFormHandler(event) {
    event.preventDefault();
    let day;
    let working;
    let workMonday = document.getElementById("#monday");
    let workTuesday = document.getElementById("#tuesday");
    let workWednesday = document.getElementById("#wednesday");
    let workThursday = document.getElementById("#thursday");
    let workFriday = document.getElementById("#friday");
    let workSaturday = document.getElementById("#saturday");
    let workSunday = document.getElementById("#sunday");
    let work_start = document.querySelector("#work_start");
    let work_end = document.querySelector("#work_end");
    let sleep_start = document.querySelector("#sleep_start");
    let sleep_end = document.querySelector("#sleep_end");
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
      if (i === 1) {
        day = "Sunday";
        if (workSunday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 2) {
        day = "Monday";
        if (workMonday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 3) {
        day = "Tuesday";
        if (workTuesday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 4) {
        day = "Wednesday";
        if (workWednesday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 5) {
        day = "Thursday";
        if (workThursday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 6) {
        day = "Friday";
        if (workFriday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      } else if (i === 7) {
        day = "Saturday";
        if (workSaturday.checked === true) {
          working = "yes";
        } else {
          working = "no";
          work_start = null;
          work_end = null;
        }
      }
  
      console.log(working + " line 84");
      console.log(work_start + " line 85");
      console.log(work_end + " line 86");

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
            user_id,
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
    .querySelector("#save")
    .addEventListener("submit", addScheduleFormHandler);