let section = document.getElementById("our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((sp) => {
      sp.style.width = sp.dataset.width;
    });
  }
};


let section2 = document.getElementById("stats");
let nums = document.querySelectorAll(".stats .box .number");
let started = false; // function started ? No

window.onscroll = function () {
  if (window.scrollY >= section2.offsetTop-200) {
    if (!started) {
      nums.forEach((numb) => startCount(numb));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
};
