let nums = document.querySelectorAll(".box .number");
let sectionTwo = document.querySelector(".videos");

//////////////////////////////////////////////////////////////////
let section = document.querySelector(".services");
let spans = document.querySelectorAll(".the-progress span");
started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop+500) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  //  else {
    //   spans.forEach((span) => {
      //     span.style.width = 0;
      //   });
      // }
      if (window.scrollY >= sectionTwo.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//////////////////////////////////////////////////////////////////
let countDownDate = new Date("Oct 08 2024 23:59:59").getTime();

let counter = setInterval(() => {
  //get date now
  let dateNow = new Date().getTime();
  
  //find the date difference between now and countdown date
  let daeDiff = countDownDate - dateNow;
  
  //get time units
  let days = Math.floor(daeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((daeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((daeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((daeDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
