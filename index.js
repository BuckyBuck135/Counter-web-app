

let countElJanice = document.getElementById("count-janice")
let countJanice = 0
function incrementJanice() {
    countJanice++
    countElJanice.textContent = countJanice
}

let countElMosquito = document.getElementById("count-mosquito")
let countMosquito = 0
function incrementMosquito() {
    countMosquito++
    countElMosquito.textContent = countMosquito
}

let saveElJanice = document.getElementById("save-janice")
function saveJanice(){
    let countJaniceStr = countJanice + " - "
    saveElJanice.textContent += countJaniceStr
    countJanice = 0
    countElJanice.textContent = 0
}

let saveElMosquito = document.getElementById("save-mosquito")
function saveMosquito(){
    let countMosquitoStr = countMosquito + " - "
    saveElMosquito.textContent += countMosquitoStr
    countMosquito = 0
    countElMosquito.textContent = 0
}