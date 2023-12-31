const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry)=> {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach( (el) => {observer.observe(el)});


//Color Changing Js
const class5child = document.querySelector(".class5-child");
const colorClass = document.querySelector(".class5-child-experiment");
const form = document.querySelector('form');
form.addEventListener('submit', function(e){

    e.preventDefault();
    const inpColor = document.querySelector("#input-color").value ;
    console.log(inpColor);
    class5child.style.backgroundColor = inpColor;
    inpColor.innerHTML =``;
});

//Time Display
setInterval(()=> {
    const time = document.querySelector("#time");
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day_night = "AM";

    if(hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if( seconds < 10) {
        seconds = "0" + seconds;
    }
    if( minutes < 10) {
        minutes = "0" + minutes;
    }
    if( hours < 10) {
        hours = "0" + hours;
    }

    // hours = String(hours).padStart(2, "0");
    // minutes = String(minutes).padStart(2, "0");
    // seconds = String(seconds).padStart(2, "0");

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});


// Rock, Paper and Scissors Js
let display_rps = document.querySelector("#display-rps");
let score_display =document.querySelector("#rps-score-display");


const one_rock = document.querySelector("#one-rock");
const two_paper = document.querySelector("#two-paper");
const three_scissor = document.querySelector("#three-paper");
const reset_rps = document.querySelector("#reset-rps");

let count_rps = 0;

function r_p_s(){
    let rand_num = Math.floor(Math.random()*3+1);
    return rand_num;
}

one_rock.addEventListener("click", function(){
    let rock_one = 1;
    let guess = r_p_s();

    if(guess === 1){
        display_rps.innerHTML = `✊`;
        var one_guess_ro = 1;
        
    }
    else if (guess === 2){
        display_rps.innerHTML = `✋`;
        var one_guess_pap = 1.5
    }
    else if(guess === 3) {
        display_rps.innerHTML = `✌️`;
        var one_guess_sci = 0.5;
    }

    if(rock_one > one_guess_sci){
        count_rps++;
        score_display.innerHTML = `Score: ${count_rps} 🥳`;
    }
    else if(rock_one < one_guess_pap){
        score_display.innerHTML = `Score: ${count_rps} 😞`;
    }
    else if(rock_one === one_guess_ro) {
        score_display.innerHTML = `Score: ${count_rps} ☹️ `;
    }
});

two_paper.addEventListener("click", function(){
    let paper_two = 2;
    let guess = r_p_s();

    if(guess === 1){
        display_rps.innerHTML = `✊`;
        var two_guess_ro = 1.5;
    }
    else if (guess === 2){
        display_rps.innerHTML = `✋`;
        var two_guess_pap = 2;
    }
    else if(guess === 3) {
        display_rps.innerHTML = `✌️`;
        var two_guess_sci = 2.5;
    }

    if(paper_two > two_guess_ro){
        count_rps++;
        score_display.innerHTML = `Score: ${count_rps} 🥳`;
    }
    else if(paper_two < two_guess_sci){
        score_display.innerHTML = `Score: ${count_rps} 😞`;
    }
    else if(paper_two === two_guess_pap) {
        score_display.innerHTML = `Score: ${count_rps} ☹️ `;
    }
});

three_scissor.addEventListener("click", function(){
    let scissor_three = 3;
    let guess = r_p_s();

    if(guess === 1){
        display_rps.innerHTML = `✊`;
        var three_guess_ro = 3.5;
    }
    else if (guess === 2){
        display_rps.innerHTML = `✋`;
        var three_guess_pap = 2.5;
    }
    else if(guess === 3) {
        display_rps.innerHTML = `✌️`;
        var three_guess_sci = 3;
    }

    if(scissor_three > three_guess_pap){
        count_rps++;
        score_display.innerHTML = `Score: ${count_rps} 🥳`;
    }
    else if(scissor_three < three_guess_ro){
        score_display.innerHTML = `Score: ${count_rps} 😞`;
    }
    else if(scissor_three === three_guess_sci) {
        score_display.innerHTML = `Score: ${count_rps} ☹️ `;
    }
});

reset_rps.addEventListener("click", function(){
    count_rps = 0;
    score_display.innerHTML = `Score: 00`;
    // display_rps.style.display = "none";
    display_rps.innerHTML = ``;
});


//Stopwatch Timer Js
const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("stp-start");
const stopButtonEl = document.getElementById("stp-stop");
const resetButtonEl = document.getElementById("stp-reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = "00:00:00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);