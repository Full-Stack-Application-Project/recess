// - Implement 15 minute increments, we can say time throughout the day in 15 min increments, if we use it as an array of time we can check the available time within the database.
// - Conditional statement to audit whether the user has enough time to schedule.
let sleep_start;
let sleep_end;
let sunday_work_start;
let sunday_work_end;
let monady_work_start;
let monday_work_end;
let tuesday_work_start;
let tuesday_work_end;
let wednesday_work_start;
let wednesday_work_end;
let thursday_work_start;
let thursday_work_end;
let friday_work_start;
let friday_work_end;
let saturday_work_start;
let saturday_work_end;


window.onload = function getScheduleData() {
    fetch("api/schedules").then(response => {
        return response.json().then(function (response) {
            console.log(response);
            sleep_start = response[0].sleep_start;
            sleep_end = response[0].sleep_end;
            console.log(sleep_start + ' sleep_start');
            console.log(sleep_end + " sleep_end");
            for (i = 0; i < 7; i++) {
                if (i === 0) {
                    sunday_work_start = response[0].work_start;
                    sunday_work_end = response[0].work_end;
                    console.log(sunday_work_start + " sunday_work_start");
                    console.log(sunday_work_end + " sunday_work_end");
                } else if (i === 1) {
                    monday_work_start = response[1].work_start;
                    monday_work_end = response[1].work_end;
                    console.log(monday_work_start + " monday_work_start");
                    console.log(monday_work_end + " monday_work_end");
                } else if (i === 2) {
                    tuesday_work_start = response[2].work_start;
                    tuesday_work_end = response[2].work_end;
                    console.log(tuesday_work_start + " tuesday_work_start");
                    console.log(tuesday_work_end + " tuesday_work_end");
                } else if (i === 3) {
                    wednesday_work_start = response[3].work_start;
                    wednesday_work_end = response[3].work_end;
                    console.log(wednesday_work_start + " wednesday_work_start");
                    console.log(wednesday_work_end + " wednesday_work_end");
                } else if (i === 4) {
                    thursday_work_start = response[4].work_start;
                    thursday_work_end = response[4].work_end;
                    console.log(thursday_work_start + " thursday_work_start");
                    console.log(thursday_work_end + " thursday_work_end");
                } else if (i === 5) {
                    friday_work_start = response[5].work_start;
                    friday_work_end = response[5].work_end;
                    console.log(friday_work_start + " friday_work_start");
                    console.log(friday_work_end + " friday_work_end");
                } else if (i === 6) {
                    saturday_work_start = response[6].work_start;
                    saturday_work_end = response[6].work_end;
                    console.log(saturday_work_start + " saturday_work_start");
                    console.log(saturday_work_end + " saturday_work_end");
                }
            }
        })
    })
}

//  fetch("api/schedules/1").then(function (response) {
//     return response.json().then(function (response) {
//       console.log(response.message);
//       console.log("above is line 6");
//       if (!response.message) {
//         console.log("got to line 7 of preset schedule");
//         deleteSchedules();
//       } else {
//         getUserId();
//       }
//     });
//   });


// let array = [];

// // for start time to end time

// // end time - start time = total time (8:15 - 6:00) = (2:15 total time available)
// // total time / 15 = length of array (2:15 / 15 = 9)

// // let array = length of 9

// // depending on length of activity

// // let activity = 30 minutes;

// // let flag = true;
// // while(flag)

// // function setTime() {
// // Math.random()*(length of array - length of activity) + 1
// // Math.random()*(9 - 2) + 1 -> Math.random() * 7 + 1 -> 0-7

// // number = 4

// // array = [0, 1, 2, 3, x, x, 7, 8]

// // arrayTemp = array;

// // let flag = true;
// // for (let i = number picked; i <number picked + activity length; i++) {
// // if(if array [i] is not occupied) {
// // GTG, block it off
// // arrayTemp[i] = {activity id, occupied: true}
// // } else {
// //     pick another random number (aka setTime())
// //    }
// //   }
// // return arrayTemp;
// //  }
// // }
// // array = arrayTemp <-- the array where we block off the time.

// // - we need a foreign key that is associated to a table of activities. The user will be tracked to the table of activities that they have.
