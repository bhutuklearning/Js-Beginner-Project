const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const display = document.querySelector("#display");
const reset = document.querySelector("#reset");
const left = document.querySelector(".container-left");
const right = document.querySelector(".container-right");
let count = 0;

add.addEventListener("click", function() {
    if(count>=0){
    count++;
    display.innerHTML =  `${count}`;
    display.style.color = "orange";
    //right.style.background = "linear-gradient(to right, #30CFD0 10%, #330867 90%)";
    }
});

sub.addEventListener("click", function() {
    if(count<=0) {
        count=0;
    }
    else{
    count--;
    display.innerHTML =  `${count}`;
    display.style.color = "red";
    // left.style.background = "linear-gradient(to right,  #330867 10%, #30CFD0 90%)";
    }

    if(count==0) {
        display.style.color = "white";
        // right.style.background = "#f5f5f5";
        // left.style.background = "#f5f5f5";
    }
});

reset.addEventListener("click", function() {
    count=0;
    display.innerHTML = `${count}`;
    display.style.color = "white";
    // right.style.background = "#f5f5f5";
    // left.style.background = "#f5f5f5";
});
