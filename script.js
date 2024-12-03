let bubContain = document.querySelector("#bubble-container");
let ranVal = document.querySelector("#value");
let time = document.querySelector("#time");
let score = document.querySelector("#scoreval")

function randomNumber(){
    return Math.floor(Math.random() * 9 + 1);
}
ranVal.textContent = randomNumber();

function randomBubble(){
    bubContain.innerHTML = ""
    for (let i = 1; i <= 54; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubContain.appendChild(bubble);
        bubble.textContent = randomNumber();
      }
    
}
randomBubble();

// code for 60sec timer
function timevala() {
  let countDown = 60;
  let timer = setInterval(function () {
    time.textContent = countDown + "sec";
    countDown--;
    if (countDown < 0) {
      clearInterval(timer); // Stop the timer
      time.textContent = "Time's up!";
    }
  }, 1000);
}
timevala();

function Logic(){
    bubContain.addEventListener("click", function(dets){
        // console.log(dets.target)
        if(dets.target.textContent === ranVal.textContent){
            score.textContent = Number(score.textContent)+10;
            ranVal.textContent = randomNumber();
            randomBubble();
        }
       
    })
}
Logic();