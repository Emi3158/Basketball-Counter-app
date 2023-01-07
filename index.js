let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let scoreCount = 0

function resetScore() {
    scoreCount = 0
    scoreHome.textContent = scoreCount
    scoreGuest.textContent = scoreCount
}

function buttonClickHome1() {
    scoreCount += 1
    scoreHome.textContent = scoreCount
}

function buttonClickHome3() {
    scoreCount += 3
    scoreHome.textContent = scoreCount
}


function buttonClickHome5() {
    scoreCount += 5
    scoreHome.textContent = scoreCount
}

function buttonClickGuest1() {
    scoreCount += 1
    scoreGuest.textContent = scoreCount
}

function buttonClickGuest3() {
    scoreCount += 3
    scoreGuest.textContent = scoreCount
}

function buttonClickGuest5() {
    scoreCount += 5
    scoreGuest.textContent = scoreCount
}
