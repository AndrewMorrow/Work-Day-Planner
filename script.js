const currentDay = $("#currentDay");
const timeBlockContainer = $(".timeblock-container");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");
var dayStartHour = moment(9, "hours").format("hA");
var workHours = 8;
// var hour = moment().get("hour");
// var day = moment().get("day");
// var year = moment().get("year");
// var date = moment().get("date");
// console.log(dayStartHour);
// shows current day at top of the page
// console.log(dayStartHour);
currentDay.text(dateFormat);

for (let i = 0; i <= workHours; i++) {
    setTimeBlock();
}
function setTimeBlock() {
    var row = $("<div class= 'row time-block'>");
    var hourSection = $(
        "<div class = 'col-md-1 hour'>" + dayStartHour + "</div>"
    );
    var textSection = $("<textarea class = 'col-md-10 textarea present'>");
    var saveBtn = $("<button class= 'col-md-1 btn saveBtn'>");
    var saveIcon = $("<i class = 'fas fa-save'>");
    timeBlockContainer.append(row);
    $(row).append(hourSection);
    $(row).append(textSection);
    $(row).append(saveBtn);
    $(saveBtn).append(saveIcon);
}
// this is how our date should appear
// console.log(m.format("dddd, MMMM Do"));
