let countHome = document.getElementById("score-board-home")
let countGuest = document.getElementById("score-board-guest")

let count = 0
let newCount = 0


function increment1() {
    count += 1
    countHome.textContent = count
    // console.log(count)
    // countEl1.textContent = count
}

function increment2() {
    count += 2
    countHome.textContent = count
    // console.log(count)
    // countEl1.textContent = count
}

function increment3() {
    count += 3
    countHome.textContent = count
    // console.log(count)
    // countEl1.textContent = count
}

function increment4() {
    newCount += 1
    countGuest.textContent = newCount
    // console.log(count)
    // countEl1.textContent = count
}

function increment5() {
    newCount += 2
    countGuest.textContent = newCount
    // console.log(count)
    // countEl1.textContent = count
}

function increment6() {
    newCount += 3
    countGuest.textContent = newCount
    // console.log(count)
    // countEl1.textContent = count
}