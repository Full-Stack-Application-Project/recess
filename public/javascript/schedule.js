var sunday_sleep_start;
var sunday_sleep_end;
var sunday_work_start;
var sunday_work_end;
var monday_sleep_start;
var monday_sleep_end;
var monday_work_start;
var monday_work_end;
var tuesday_sleep_start;
var tuesday_sleep_end;
var tuesday_work_start;
var tuesday_work_end;
var wednesday_sleep_start;
var wednesday_sleep_end;
var wednesday_work_start;
var wednesday_work_end;
var thursday_sleep_start;
var thursday_sleep_end;
var thursday_work_start;
var thursday_work_end;
var friday_sleep_start;
var friday_sleep_end;
var friday_work_start;
var friday_work_end;
var saturday_sleep_start;
var saturday_sleep_end;
var saturday_work_start;
var saturday_work_end;
var sunday_working;
var monday_working;
var tuesday_working;
var wednesday_working;
var thursday_working;
var friday_working;
var saturday_working;

var randomNumber;

var preset_work_time;
var preset_sleep_time;

var activity_category;
var activity_name;
var activity_length;
var user_id;
var time;
var hiddenTimesArr = [];

// this array has every available 15 minute time window in it
var activityArray = [];

// this array holds all activities
var allActivities = [];

function getScheduleData() {
  for (i = 1; i <= 672; i++) {
    let timeHtml = document.getElementById(i).textContent.trim();
    let timeId = document.getElementById(i);
    var input = timeHtml;
    var timeName = input.split(' ');
    timeId.innerHTML = `<td class= "time">${timeName[0] + " " + timeName[1]}</td>
    <td class = "no-activity"></td>`
  }

  fetch("api/schedules").then((response) => {
    return response.json().then(function (response) {
      for (i = 0; i < 7; i++) {
        if (i === 0) {
          sunday_sleep_start = response[0].sleep_start;
          sunday_sleep_end = response[0].sleep_end;
          sunday_work_start = response[0].work_start;
          sunday_work_end = response[0].work_end;
          sunday_working = response[0].working;
        } else if (i === 1) {
          monday_sleep_start = response[1].sleep_start + 95;
          monday_sleep_end = response[1].sleep_end + 95;
          monday_work_start = response[1].work_start + 95;
          monday_work_end = response[1].work_end + 95;
          monday_working = response[1].working;
        } else if (i === 2) {
          tuesday_sleep_start = response[2].sleep_start + 191;
          tuesday_sleep_end = response[2].sleep_end + 191;
          tuesday_work_start = response[2].work_start + 191;
          tuesday_work_end = response[2].work_end + 191;
          tuesday_working = response[2].working;
        } else if (i === 3) {
          wednesday_sleep_start = response[3].sleep_start + 287;
          wednesday_sleep_end = response[3].sleep_end + 287;
          wednesday_work_start = response[3].work_start + 287;
          wednesday_work_end = response[3].work_end + 287;
          wednesday_working = response[3].working;
          
        } else if (i === 4) {
          thursday_sleep_start = response[4].sleep_start + 383;
          thursday_sleep_end = response[4].sleep_end + 383;
          thursday_work_start = response[4].work_start + 383;
          thursday_work_end = response[4].work_end + 383;
          thursday_working = response[4].working;
        } else if (i === 5) {
          friday_sleep_start = response[5].sleep_start + 479;
          friday_sleep_end = response[5].sleep_end + 479;
          friday_work_start = response[5].work_start + 479;
          friday_work_end = response[5].work_end + 479;
          friday_working = response[5].working;
        } else if (i === 6) {
          saturday_sleep_start = response[6].sleep_start + 575;
          saturday_sleep_end = response[6].sleep_end + 575;
          saturday_work_start = response[6].work_start + 575;
          saturday_work_end = response[6].work_end + 575;
          saturday_working = response[6].working;
        }
      }

      for (i = 1; i < sunday_sleep_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = sunday_work_start - 1; i < sunday_work_end - 1; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 96; i >= sunday_sleep_start - 1; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 97; i < monday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = monday_work_start; i < monday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 192; i >= monday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 193; i < tuesday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = tuesday_work_start; i < tuesday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 288; i >= tuesday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 289; i < wednesday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = wednesday_work_start; i < wednesday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 384; i >= wednesday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 385; i < thursday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = thursday_work_start; i < thursday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 480; i >= thursday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 481; i < friday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = friday_work_start; i < friday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 576; i >= friday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 577; i < saturday_sleep_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = saturday_work_start; i < saturday_work_end; i++) {
        hiddenTimesArr.push(i);
      }

      for (i = 672; i >= saturday_sleep_start; i--) {
        hiddenTimesArr.push(i);
      }

      for (i = 0; i < hiddenTimesArr.length; i++) {
        let hiddenTime = document.getElementById(hiddenTimesArr[i]);
        hiddenTime.classList = "hidden";
      }

      if (sunday_working === "yes") {
        for (i = sunday_sleep_end - 1; i > sunday_work_start - 1; i++) {
          activityArray.push(i);
        }
        for (i = sunday_work_end - 1; i > sunday_sleep_start - 1; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = sunday_sleep_end - 1; i < sunday_sleep_start - 1; i++) {
          activityArray.push(i);
        }
      }

      if (monday_working === "yes") {
        for (i = monday_sleep_end; i < monday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = monday_work_end; i < monday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = monday_sleep_end; i < monday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      if (tuesday_working === "yes") {
        for (i = tuesday_sleep_end; i < tuesday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = tuesday_work_end; i < tuesday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = tuesday_sleep_end; i < tuesday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      if (wednesday_working === "yes") {
        for (i = wednesday_sleep_end; i < wednesday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = wednesday_work_end; i < wednesday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = wednesday_sleep_end; i < wednesday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      if (thursday_working === "yes") {
        for (i = thursday_sleep_end; i < thursday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = thursday_work_end; i < thursday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = thursday_sleep_end; i < thursday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      if (friday_working === "yes") {
        for (i = friday_sleep_end; i < friday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = friday_work_end; i < friday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = friday_sleep_end; i < friday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      if (saturday_working === "yes") {
        for (i = saturday_sleep_end; i < saturday_work_start; i++) {
          activityArray.push(i);
        }
        for (i = saturday_work_end; i < saturday_sleep_start; i++) {
          activityArray.push(i);
        }
      } else {
        for (i = saturday_sleep_end; i < saturday_sleep_start; i++) {
          activityArray.push(i);
        }
      }

      createActivities(activityArray);

    });
  });
};

function createActivities(activityArray) {
  fetch("api/activities").then((response) => {
    return response.json().then(function (response) {
      for (i = 0; i < response.length; i++) {
        activity_category = response[i].activity_category;
        activity_name = response[i].activity_name;
        activity_length = response[i].activity_length;
        user_id = response[i].user_id;
        let spanLength = activity_length / 15;
        randomNumber =
          activityArray[Math.floor(Math.random() * activityArray.length)];
        let timeHtmlId = randomNumber;
        let timeHtml = document.getElementById(timeHtmlId).textContent.trim();
        let timeId = document.getElementById(randomNumber);
        timeId.innerHTML = "";

        if (activity_category === "Mindfulness") {
          timeId.innerHTML = `<td class= "time activity">${timeHtml}</td>
        <td class = "has-activity mindful" rowspan="${spanLength}">
          <span class="description">${activity_category} - ${activity_name}</span>
        </td>`
        } else if (activity_category === "Academics"){
        timeId.innerHTML = `<td class= "time activity">${timeHtml}</td>
        <td class = "has-activity academic" rowspan="${spanLength}">
          <span class="description">${activity_category} - ${activity_name}</span>
        </td>`
        } else if (activity_category === "Other"){
          timeId.innerHTML = `<td class= "time activity">${timeHtml}</td>
          <td class = "has-activity other" rowspan="${spanLength}">
            <span class="description">${activity_category} - ${activity_name}</span>
          </td>`
        } else if (activity_category === "Relaxation"){
          timeId.innerHTML = `<td class= "time activity">${timeHtml}</td>
          <td class = "has-activity relax" rowspan="${spanLength}">
            <span class="description">${activity_category} - ${activity_name}</span>
          </td>`
        } else if (activity_category === "Exercise"){
          timeId.innerHTML = `<td class= "time activity">${timeHtml}</td>
          <td class = "has-activity exercise" rowspan="${spanLength}">
            <span class="description">${activity_category} - ${activity_name}</span>
          </td>`
        }

        var index = activityArray.indexOf(randomNumber);
        console.log(index);
        if (index > -1) {
          activityArray.splice(index, spanLength);
        }
      }
    });
  });
}

document.getElementById("schedule").addEventListener("click", getScheduleData);
