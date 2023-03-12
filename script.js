"use strict";

const dateString = document.querySelector(".date");
const time = document.querySelector(".time");

const dateAndTime = function () {
  const weekDayArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];
  const monthsArray = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const weekDay = now.getDay();
  const month = now.getMonth();
  const date = `${now.getDate()}`.padStart(2, 0);
  const year = now.getFullYear();
  const hours = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  const seconds = `${now.getSeconds()}`.padStart(2, 0);
  dateString.textContent = `${weekDayArray[weekDay]}: ${date} ${monthsArray[month]}, ${year}`;
  time.textContent = `${hours}:${minutes}:${seconds}`;
};
setInterval(dateAndTime, 1000);

dateAndTime();
