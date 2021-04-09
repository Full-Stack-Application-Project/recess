// - Implement 15 minute increments, we can say time throughout the day in 15 min increments, if we use it as an array of time we can check the available time within the database.
// - Conditional statement to audit whether the user has enough time to schedule.

let array = [];

const academicForm = document.querySelector(".activityLength").value;

// for start time to end time

// end time - start time = total time (8:15 - 6:00) = (2:15 total time available)
// total time / 15 = length of array (2:15 / 15 = 9)

// let array = length of 9

// depending on length of activity

// let activity = 30 minutes;

// let flag = true;
// while(flag)

// function setTime() {
// Math.random()*(length of array - length of activity) + 1
// Math.random()*(9 - 2) + 1 -> Math.random() * 7 + 1 -> 0-7

// number = 4

// array = [0, 1, 2, 3, x, x, 7, 8]

// arrayTemp = array;

// let flag = true;
// for (let i = number picked; i <number picked + activity length; i++) {
// if(if array [i] is not occupied) {
// GTG, block it off
// arrayTemp[i] = {activity id, occupied: true}
// } else {
//     pick another random number (aka setTime())
//    }
//   }
// return arrayTemp;
//  }
// }
// array = arrayTemp <-- the array where we block off the time.

// - we need a foreign key that is associated to a table of activities. The user will be tracked to the table of activities that they have.
