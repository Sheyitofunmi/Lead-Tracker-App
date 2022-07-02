let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
// console.log(homeScoreEl)
// console.log(guestScoreEl)

let homeScore = 0;
let guestScore = 0;
// console.log(guestScore)

// create home function
// add plus 1 to home
function add1PlusHome() {
  homeScore += 1;
  // console.log(homeScore)
  homeScoreEl.textContent = homeScore;  
}


// add plus 2 to home
function add2PlusHome() {
  homeScore += 2;
  // console.log(homeScore)
  homeScoreEl.textContent = homeScore;
}

// add plus 3 to home
function add3PlusHome() {
  homeScore += 3;
  // console.log(homeScore)
  homeScoreEl.textContent = homeScore;
}


// add plus 1 to guest
function add1PlusGuest() {
  guestScore += 1;
  // console.log(guestScore)
  guestScoreEl.textContent = guestScore;
}


// add plus 2 to guest
function add2PlusGuest() {
  guestScore += 2;
  // console.log(guestScore)
  guestScoreEl.textContent = guestScore;
}


// add plus 3 to guest
function add3PlusGuest() {
  guestScore += 3;
  // console.log(guestScore)
  guestScoreEl.textContent = guestScore;
}

// setting the count zero
let restartGameEl = document.getElementById("restart-game")
// console.log(restartGameEl)
function restartGame() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
