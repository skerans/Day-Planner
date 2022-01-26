// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
const timeEl = document.querySelectorAll(".time");



let today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

// set this hour to a variable
let setTime;
let now = today.hours();
console.log(now);
// setTime = 10;
// console.log(now == setTime);


//check this hour to each hour of the day, previous ones are grey, future are green, now is red
//set click target to setTime variable
//check if setTime is larger or smaller than now, addClass(past/present/future)
$(".time").each(function (setTime) {
  if(now > setTime) {
    $(this).addClass("past");
    // console.log(setTime);
  } else if (now < setTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
})


//set save buttons to each individual input to save text to local storage

$(".save-btn").on('click', function () {
  task = $(this).siblings('.time').val().trim();
  time = $(this).siblings('.time').attr("id");
  console.log(time);
  console.log(task);
  if (task != null) {
  localStorage.setItem(time, task);
  }
})

//get saved input from local storage and put on page on page load
function showItems() {
for (let i = 0; i < 24; i++) {
  value = localStorage.getItem('hour-' + i);
  $('#hour-' + i).val(value);
}
}
showItems()

//make pretty



