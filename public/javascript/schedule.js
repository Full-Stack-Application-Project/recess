var sleep_start;
var sleep_end;
var sunday_work_start;
var sunday_work_end;
var monday_work_start;
var monday_work_end;
var tuesday_work_start;
var tuesday_work_end;
var wednesday_work_start;
var wednesday_work_end;
var thursday_work_start;
var thursday_work_end;
var friday_work_start;
var friday_work_end;
var saturday_work_start;
var saturday_work_end;
var sunday_working;
var monday_working;
var tuesday_working;
var wednesday_working;
var thursday_working;
var friday_working;
var saturday_working;

var preset_work_time;
var preset_sleep_time;

var sundayEl = document.getElementById("sunday");

let activityArray = [];

window.onload = function getScheduleData() {
  fetch("api/schedules").then((response) => {
    return response.json().then(function (response) {
      console.log(response);
      sleep_start = response[0].sleep_start;
      sleep_end = response[0].sleep_end;
      console.log(sleep_start + " sleep_start");
      console.log(sleep_end + " sleep_end");
      for (i = 0; i < 7; i++) {
        if (i === 0) {
          sunday_work_start = response[0].work_start;
          sunday_work_end = response[0].work_end;
          sunday_working = response[0].working;
          console.log(sunday_work_start + " sunday_work_start");
          console.log(sunday_work_end + " sunday_work_end");
        } else if (i === 1) {
          monday_work_start = response[1].work_start;
          monday_work_end = response[1].work_end;
          monday_working = response[1].working;
          console.log(monday_work_start + " monday_work_start");
          console.log(monday_work_end + " monday_work_end");
        } else if (i === 2) {
          tuesday_work_start = response[2].work_start;
          tuesday_work_end = response[2].work_end;
          tuesday_working = response[2].working;
          console.log(tuesday_work_start + " tuesday_work_start");
          console.log(tuesday_work_end + " tuesday_work_end");
        } else if (i === 3) {
          wednesday_work_start = response[3].work_start;
          wednesday_work_end = response[3].work_end;
          wednesday_working = response[3].working;
          console.log(wednesday_work_start + " wednesday_work_start");
          console.log(wednesday_work_end + " wednesday_work_end");
        } else if (i === 4) {
          thursday_work_start = response[4].work_start;
          thursday_work_end = response[4].work_end;
          thursday_working = response[4].working;
          console.log(thursday_work_start + " thursday_work_start");
          console.log(thursday_work_end + " thursday_work_end");
        } else if (i === 5) {
          friday_work_start = response[5].work_start;
          friday_work_end = response[5].work_end;
          friday_working = response[5].working;
          console.log(friday_work_start + " friday_work_start");
          console.log(friday_work_end + " friday_work_end");
        } else if (i === 6) {
          saturday_work_start = response[6].work_start;
          saturday_work_end = response[6].work_end;
          saturday_working = response[6].working;
          console.log(saturday_work_start + " saturday_work_start");
          console.log(saturday_work_end + " saturday_work_end");
        }
      }

      var sundayScheduleEl = document.createElement("tr");
      var sundayTimesEl = document.createElement("td");
      

      // We need to set something to calculate the hours / time available for both the work and sleep schedule and store the time available data into an array.
      sundayEl.appendChild(sunday_schedule);


      //   I think the best move is to use the sleep/work time logic within the fetch api/schedules function (right after the last else if, line 78), then call getActivityData when applicable.
    });
  });
};

/* window.onload = function getActivityData() {
  fetch("api/activities").then((response) => {
    return response.json().then(function (response) {
      console.log(response);
      var activity_category;
      var activity_name;
      var activity_length;
      var user_id;
      for (i = 0; i < response.length; i++) {
        activity_category = response[i].activity_category;
        activity_name = response[i].activity_name;
        activity_length = response[i].activity_length;
        user_id = response[i].user_id;
      }
    });
  });
}; */

//TODO Implement 15 minute increments, we can say time throughout the day in 15 min increments, if we use it as an array of time we can check the available time within the database.
//TODO Conditional statement to audit whether the user has enough time to schedule.

// * STACK OVERFLOW FUNCTION TO RANDOMIZE TIMES <-- use for reference if needed,

// function randomDate(sleepStart, sleepEnd, workStart, workEnd) {
//   function randomValueBetween(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//   var workStart = workStart || "01-01-1970";
//   var workEnd = workEnd || new Date().toLocaleDateString();
//! insert sleep time variables here
//   date1 = new Date(date1).getTime();
//   date2 = new Date(date2).getTime();
//   if (date1 > date2) {
//     return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
//   } else {
//     return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
//   }
// }

// randomDate("02/13/2013", "01/01/2000");
// ("1/31/2009");
// randomDate();
// ("6/14/2001");

// * Second option to use for randomization

// var yourRandomGenerator = function (rangeOfDays, startHour, hourRange) {
//   var today = new Date(Date.now());
//   return new Date(
//     today.getYear() + 1900,
//     today.getMonth(),
//     today.getDate() + Math.random() * rangeOfDays,
//     Math.random() * hourRange + startHour,
//     Math.random() * 60
//   );
// };

// console.log(yourRandomGenerator(2, 8, 2));

// TODO we need a foreign key that is associated to a table of activities. The user will be tracked to the table of activities that they have.
