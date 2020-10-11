const currentDay = $("#currentDay");
const timeBlockContainer = $(".timeblock-container");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");
var dayStartHour = m.set("h", 9).set("m", 0).set("s", 0);
var workHours = 8;
var textSection;
currentDay.text(dateFormat);
var dayofWeek = moment().weekday();
var storedDay = localStorage.getItem("day");

// checks if a new day and clears storage if it is
clearCheck(dayofWeek);

// this calls our html and storage functions to load page
for (let i = 0; i <= workHours; i++) {
    // console.log(dayofWeek);
    setTimeBlock();
    setEventValues();
    dayStartHour.add(1, "h");
}
// sets up html elements
function setTimeBlock() {
    var row = $("<div class= 'row time-block mb-4'>");
    var hourSection = $(
        "<div class = 'col-md-1 col-sm-2 col-xs-1 hour'>" +
            dayStartHour.format("hA") +
            "</div>"
    );
    // sets text fields
    var textSection = $(
        `<textarea class = 'col-md-10 col-sm-6 col-xs-1 description' data-time="${dayStartHour.format(
            "hA"
        )}"> `
    );
    // sets up save button
    var saveBtn = $("<button class= 'col-md-1 col-sm-2 col-xs-1 btn saveBtn'>");
    // sets up save icon
    var saveIcon = $("<i class = 'fas fa-save'>");
    // these statements check the hour and sets highlighting
    if (dayStartHour.hour() === moment().get("h")) {
        textSection.attr(
            "class",
            "present col-md-10 col-sm-7 col-xs-1 description"
        );
    } else if (dayStartHour.hour() > moment().get("h")) {
        textSection.attr(
            "class",
            "future col-md-10 col-sm-7 col-xs-1 description"
        );
    } else {
        textSection.attr(
            "class",
            "past col-md-10 col-sm-7 col-xs-1 description"
        );
    }
    // appends the elements to the page
    timeBlockContainer.append(row);
    $(row).append(hourSection);
    $(row).append(textSection);
    $(row).append(saveBtn);
    $(saveBtn).append(saveIcon);
}

// Listens for the button or icon to be clicked and saves the textfield into local storage
$("button").add("i").on("click", saveEvent);
function saveEvent(e) {
    e.preventDefault();
    if (e.target.parentNode.previousElementSibling.value === "") {
        return;
    }
    // stores setDay so we can compare it to a new day when page loads
    var setDay = moment().weekday();
    if ($(e.target).is("i")) {
        var storageName = e.target.parentNode.previousElementSibling.value;
        var storageValue =
            e.target.parentNode.previousElementSibling.dataset.time;
        localStorage.setItem(storageValue, storageName);
        localStorage.setItem("day", setDay);
    } else {
        var storageName = e.target.previousElementSibling.value;
        var storageValue = e.target.previousElementSibling.dataset.time;
        localStorage.setItem(storageValue, storageName);
        localStorage.setItem("day", setDay);
    }
}
// this grabs the text from local storage
function setEventValues() {
    for (j = 0; j < document.querySelectorAll(" .row > textarea").length; j++) {
        var searchItem = document.querySelectorAll(
            "body > div > div > textarea"
        )[j].dataset.time;
        document.querySelectorAll("body > div > div > textarea")[
            j
        ].value = localStorage.getItem(searchItem);
    }
}
// clear storage if it is a new day
function clearCheck(day) {
    if (day != storedDay) {
        localStorage.clear();
    }
}
