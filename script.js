const outerCircle = document.querySelector(".outer-seconds");
const innerCircle = document.querySelector(".inner-hours");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const outerElements = [];
const innerElements = [];

for (let i = 1; i <= 60; i++)
  outerElements.push(
    `<span class="${i % 5 === 0 ? "" : "bar"}" style='--id:${i};'><p>${
      i % 5 === 0 ? i : ""
    }</p></span>`
  );

for (let i = 1; i <= 12; i++)
  innerElements.push(`<span style='--index:${i};'><p>${i}</p></span>`);

outerCircle.insertAdjacentHTML("afterbegin", `${outerElements.join("")} `);
innerCircle.insertAdjacentHTML("afterbegin", `${innerElements.join("")} `);

const date = new Date();
const current_hours = date.getHours();
const current_minutes = date.getMinutes();
const current_seconds = date.getSeconds();

seconds.style.transform = `rotate(${current_seconds * 6}deg)`;
minutes.style.transform = `rotate(${current_minutes * 6}deg)`;
hours.style.transform = `rotate(${
  current_hours * 30 + current_minutes / 2
}deg)`;

setInterval(() => {
  const date = new Date();
  const current_hours = date.getHours();
  const current_minutes = date.getMinutes();
  const current_seconds = date.getSeconds();

  seconds.style.transform = `rotate(${current_seconds * 6}deg)`;
  minutes.style.transform = `rotate(${current_minutes * 6}deg)`;
  hours.style.transform = `rotate(${
    current_hours * 30 + current_minutes / 2
  }deg)`;
}, 1000);
