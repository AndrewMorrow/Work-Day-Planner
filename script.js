const currentDay = $("#currentDay");
const timeBlockContainer = $(".timeblock-container");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");
// var dayStartHour = moment(9, "hours").format("hA");
var dayStartHour = m.set("h", 9).set("m", 0).set("s", 0);
var workHours = 8;
var textSection;
// var hour = moment().get("hour");
// var day = moment().get("day");
// var year = moment().get("year");
// var date = moment().get("date");
// console.log(dayStartHour);
// shows current day at top of the page
// console.log(dayStartHour);
currentDay.text(dateFormat);
// console.log(moment().get("h"));
// console.log(dayStartHour.hour());
// console.log(dayStartHour.hour() < moment().get("h"));
for (let i = 0; i <= workHours; i++) {
    // nextHour = m.add(1, "hour").format("hA");

    setTimeBlock();
    dayStartHour.add(1, "h");
    setEventValues();
}

function setTimeBlock() {
    var row = $("<div class= 'row time-block'>");
    var hourSection = $(
        "<div class = 'col-md-1 hour'>" + dayStartHour.format("hA") + "</div>"
    );
    var textSection = $("<textarea class = 'col-md-10 description'>");
    var saveBtn = $("<button class= 'col-md-1 btn saveBtn'>");
    var saveIcon = $("<i class = 'fas fa-save'>");

    if (dayStartHour.hour() === moment().get("h")) {
        textSection.attr("class", "present col-md-10 description");
    } else if (dayStartHour.hour() > moment().get("h")) {
        textSection.attr("class", "future col-md-10 description");
    } else {
        textSection.attr("class", "past col-md-10 description");
    }
    timeBlockContainer.append(row);
    $(row).append(hourSection);
    $(row).append(textSection);
    $(row).append(saveBtn);
    $(saveBtn).append(saveIcon);
}

$("button").on("click", saveEvent);
function saveEvent(e) {
    e.preventDefault();
    console.log("clicked");
    var descriptionTextArea = $("textarea");
    newEvent = descriptionTextArea.val().trim();
    if (newEvent === "") {
        console.log("oops");
        console.log(newEvent);
        return;
    }
    console.log(newEvent);
    localStorage.setItem("Event", newEvent);
}

function setEventValues() {
    // newEvent = $("textarea").value;
    newEvent = localStorage.getItem("Event") || "";
}
// this is how our date should appear
// console.log(m.format("dddd, MMMM Do"));
