//Sets the date
$(document).ready(function() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var formattedDate = month + "/" + day + "/" + year;

  $("#current-date").text(formattedDate);
});

//Sets color of row based off current time
const currentHour = new Date().getHours();
const timeBlocks = document.querySelectorAll('.time-block');
timeBlocks.forEach(timeBlock => {

// Get the hour from the id attribute of the div
const hour = parseInt(timeBlock.id.split('-')[1]);

// Add the appropriate class based on the comparison to the current hour
  if (hour < currentHour) {
    timeBlock.classList.add('past');
  } else if (hour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
    $(this).removeClass('past');
    $(this).removeClass('present');
  }
});
// Save button
$(".saveBtn").click(function() {
  const hour = $(this).parent().attr("id");
  const text = $(this).siblings(".description").val();
  localStorage.setItem(hour, text);
});

$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



  