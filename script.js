const currentDay = $("#currentDay");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");

// shows current day at top of the page
currentDay.text(dateFormat);
// var day = moment().get("day");
// var year = moment().get("year");
// var hour = moment().get("hour");
// var date = moment().get("date");

// this is how our date should appear
console.log(m.format("dddd, MMMM Do"));
