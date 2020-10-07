const currentDay = $("#currentDay");
const timeBlockContainer = $(".timeblock-container");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");
var dayStartHour = moment().set({ hour: 9, minutes: 0, seconds: 0 });
// var hour = moment().get("hour");
// var day = moment().get("day");
// var year = moment().get("year");
// var date = moment().get("date");
// console.log(dayStartHour);
// shows current day at top of the page
console.log(dayStartHour);
currentDay.text(dateFormat);

var hourSection = $("<p>" + dayStartHour + "</p>");
timeBlockContainer.append(hourSection);

// this is how our date should appear
// console.log(m.format("dddd, MMMM Do"));
