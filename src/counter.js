let ourDays = document.querySelector('.days h2');
let ourHours = document.querySelector('.hours h2');
let ourMinutes = document.querySelector('.minutes h2');
let ourSeconds = document.querySelector('.seconds h2');
let countDown = new Date('Sep 22, 2023 15:00:00').getTime();

let counter = setInterval(() => {
  //   GET DATE NOW
  let now = new Date().getTime();
  //   THE DIFF BETWEEN NOW AND COUNTDOWN
  let def = countDown - now;
  //   GET TIME UNITS
  let days = Math.floor(def / (1000 * 60 * 60 * 24));
  let hours = Math.floor((def % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((def % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((def % (1000 * 60)) / 1000);

  ourDays.innerHTML = days;
  ourHours.innerHTML = `0${hours}`;
  ourMinutes.innerHTML = minutes < 10 ? `0 ${minutes}` : minutes;
  ourSeconds.innerHTML = seconds < 10 ? `0 ${seconds}` : seconds;
}, 1000);
