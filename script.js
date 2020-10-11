const currentDay = $("#currentDay");
const timeBlockContainer = $(".timeblock-container");
const m = moment();
const dateFormat = m.format("dddd, MMMM Do");
var dayStartHour = m.set("h", 9).set("m", 0).set("s", 0);
var workHours = 8;
var textSection;
currentDay.text(dateFormat);

for (let i = 0; i <= workHours; i++) {
    setTimeBlock();
    setEventValues();
    dayStartHour.add(1, "h");
}
function setTimeBlock() {
    var row = $("<div class= 'row time-block mb-4'>");
    var hourSection = $(
        "<div class = 'col-md-1 col-sm-2 col-xs-1 hour'>" +
            dayStartHour.format("hA") +
            "</div>"
    );

    var textSection = $(
        `<textarea class = 'col-md-10 col-sm-6 col-xs-1 description' data-time="${dayStartHour.format(
            "hA"
        )}"> `
    );
    var saveBtn = $("<button class= 'col-md-1 col-sm-2 col-xs-1 btn saveBtn'>");
    var saveIcon = $("<i class = 'fas fa-save'>");

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
    timeBlockContainer.append(row);
    $(row).append(hourSection);
    $(row).append(textSection);
    $(row).append(saveBtn);
    $(saveBtn).append(saveIcon);
}

$("button").add("i").on("click", saveEvent);
function saveEvent(e) {
    e.preventDefault();
    if ($(e.target).is("i")) {
        var storageName = e.target.parentNode.previousElementSibling.value;
        var storageValue =
            e.target.parentNode.previousElementSibling.dataset.time;
        localStorage.setItem(storageValue, storageName);
    } else {
        var storageName = e.target.previousElementSibling.value;
        var storageValue = e.target.previousElementSibling.dataset.time;
        localStorage.setItem(storageValue, storageName);
    }
}

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
