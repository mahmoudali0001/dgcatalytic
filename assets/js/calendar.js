let month = document.querySelector(".months h1");
let year = document.querySelector(".months p");
let monthDays = document.querySelector(".days");

const date = new Date();

const renderCalender = () => {
  let months = [
    "January",
    "February",
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

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const fristDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = lastDayIndex;

  month.innerHTML = months[date.getMonth()];
  year.innerHTML = date.getFullYear();

  let daysOfWeek = ["Fri", "Sat", "Sun", "Mon", "Tue", "Web", "Thu"];
  let days = "";

  for (let x = fristDayIndex; x > 0; x--) {
    if (
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, x).getDay()
      ] !== "Sun" &&
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, x).getDay()
      ] !== "Sat"
    ) {
      days += `<div class="day-parent prev-date"><span> ${
        prevLastDay - x + 1
      }</span></div>`;
      monthDays.innerHTML = days;
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, i).getDay()
      ] !== "Sun" &&
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, i).getDay()
      ] !== "Sat"
    ) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `
        <div class="day-parent today">
          <span class="day"> ${i}</span>
        </div>`;
        monthDays.innerHTML = days;
      }

      days += `
      <div class="day-parent">
        <span class="day"> ${i}</span>
        <div class="booking-parent"> 
          <ul>
            <li>5</li>
            <li>5</li>
            <li>6</li>
            <li>8</li>
          </ul>
        </div>
      </div>`;
      monthDays.innerHTML = days;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    if (
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, j).getDay()
      ] !== "Sun" &&
      daysOfWeek[
        new Date(date.getFullYear(), date.getMonth() + 1, j).getDay()
      ] !== "Sat"
    ) {
      days += `<div class="day-parent next-date"><span> ${j}</span></div>`;
      monthDays.innerHTML = days;
    }
  }
};

document.querySelector(".prev").addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

document.querySelector(".next").addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});

renderCalender();

document.querySelectorAll(".day-parent").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.getAttribute("class") == "day-parent" ||
    e.target.getAttribute("class") == "day"
      ? console.log("yes")
      : console.log("not this");
  });
});
