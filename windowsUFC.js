function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
globalThis.handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    responsePayload = decodeJwtResponse(response.credential);
  
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
  }
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const minimizeModalBtn = document.querySelector(".btn-minimize");
// const submitName = document.querySelector(".btn");
let fighterName = document.getElementById('nameOfFighter');
console.log(fighterName);

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// minimze modal function
const minimizeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
minimizeModalBtn.addEventListener("click", minimizeModal)
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
}
});

// open modal function
const openModal = function () {
modal.classList.remove("hidden");
overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


function myFunName() {

    let text;
    let nameOfFighter = prompt("Input name of fighter:", "");
    if (nameOfFighter == null || nameOfFighter == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[a-zA-Z ]+$/.test(nameOfFighter)) {
        alert("Only letters we need");
        validate()
    } 

    
    else {
    text ="Name: " + nameOfFighter + ";";
    }
    document.getElementById("FighterName").innerHTML = text;
}

var win = 0;
function myFunWins() {

    let text;
    win = prompt("How many wins?:", "");
    if (win == null || win == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(win)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wins: " + win + ";";
    }
    document.getElementById("FighterWins").innerHTML = text;

    
}
var losses = 0;
function myFunLosses() {

    let text;
    losses = prompt("How many losses?:", "");
    if (losses == null || losses == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(losses)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Losses: " + losses + ";";
    }
    document.getElementById("FighterLosses").innerHTML = text;
}

var draws = 0;
function myFunDraws() {

    let text;
    draws = prompt("How many draws?:", "");
    if (draws == null || draws == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(draws)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Draws: " + draws + ";";
    }
    document.getElementById("FighterDraws").innerHTML = text;
}

var NCs = 0;
function myFunNCs() {

    let text;
    NCs = prompt("How many NC's?:", "");
    if (NCs == null || NCs == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(NCs)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "NC's: " + NCs + ";";
    }
    document.getElementById("FighterNCs").innerHTML = text;
}
// (win - losses + (draws/2) - (NCs/2)) * 40

// sum = win - losses + draws - NCs;
// console.log(' So ${win} - ${losses} + ${draws} - ${NCs}');
// document.getElementById("FighterScoreResult").innerHTML = scoreResult;


function myFunFinishes() {

    let text;
    let finishes = prompt("How many finishes?:", "");
    if (finishes == null || finishes == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(finishes)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Finishes: " + finishes + ";";
    }
    document.getElementById("FighterFinishes").innerHTML = text;
}

function myFunSubAtt() {

    let text;
    let subatt = prompt("How many submission attempts?:", "");
    if (subatt == null || subatt == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(subatt)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Submission attempt: " + subatt + ";";
    }
    document.getElementById("FighterSubAtt").innerHTML = text;
}

function myFunStrMin() {

    let text;
    let strmin = prompt("How many strikes per minute?:", "");
    if (strmin == null || strmin == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(strmin)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Strikes per minute: " + strmin + ";";
    }
    document.getElementById("FighterStrMin").innerHTML = text;
}

function myFunWins2() {

    let text;
    let win2 = prompt("How many wins?:", "");
    if (win2 == null || win2 == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(win2)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wins: " + win2 + ";";
    }
    document.getElementById("FighterWins2").innerHTML = text;
}

function myFunFinishes() {

    let text;
    let finishes = prompt("How many finishes?:", "");
    if (finishes == null || finishes == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(finishes)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Finishes: " + finishes + ";";
    }
    document.getElementById("FinishRateScope").innerHTML = text;
}

function myFunAge() {

    let text;
    let age = prompt("What is age?:", "");
    if (age == null || age == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(age)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Age: " + age + ";";
    }
    document.getElementById("FighterAge").innerHTML = text;
}

function myFunWinStreak() {

    let text;
    let winstreak = prompt("Give me win streak:", "");
    if (winstreak == null || winstreak == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(winstreak)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Win streak: " + winstreak + ";";
    }
    document.getElementById("FighterWinStreak").innerHTML = text;
}

function myFunWrestleWins() {

    let text;
    let wrestlewins = prompt("Give me wrestle wins:", "");
    if (wrestlewins == null || wrestlewins == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(wrestlewins)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wrestle wins: " + wrestlewins + ";";
    }
    document.getElementById("FighterWrestleWins").innerHTML = text;
}

function myFunStrikeAccuracy() {

    let text;
    let strikeacc = prompt("Give me streak accuracy:", "");
    if (strikeacc == null || strikeacc == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(strikeacc)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Strike accuracy: " + strikeacc + ";";
    }
    document.getElementById("FighterStrikeAccuracy").innerHTML = text;
}

function myFunTakedownAccuracy() {

    let text;
    let takedownacc = prompt("Give me takedown accuracy:", "");
    if (takedownacc == null || takedownacc == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(takedownacc)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Takedown accuracy: " + takedownacc + ";";
    }
    document.getElementById("FighterTakedownAccuracy").innerHTML = text;
}

function myFunStrikeDefense() {

    let text;
    let strikedefense = prompt("Give me strike defense:", "");
    if (strikedefense == null || takedownacc == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(strikedefense)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Strike defense: " + strikedefense + ";";
    }
    document.getElementById("FighterStrikeDefense").innerHTML = text;
}

function myFunTakedownDefense() {

    let text;
    let takedowndefense = prompt("Give me takedown defense:", "");
    if (takedowndefense == null || takedowndefense == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/[+-]?([0-9]*[.])?[0-9]+/.test(takedowndefense)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Takedown defense: " + takedowndefense + ";";
    }
    document.getElementById("FighterTakedownDefense").innerHTML = text;
}

function myFunInjury() {

    let text;
    let injury = prompt("Give me injury:", "");
    if (injury == null || injury == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(injury)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Injury: " + injury + ";";
    }
    document.getElementById("FighterInjury").innerHTML = text;
}

function myFunFightWeek() {

    let text;
    let fightweek = prompt("Give me fight week:", "");
    if (fightweek == null || fightweek == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(fightweek)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Fight week: " + fightweek + ";";
    }
    document.getElementById("FighterFightWeek").innerHTML = text;
}

function myFunCoaches() {

    let text;
    let coaches = prompt("Give me coaches:", "");
    if (coaches == null || coaches == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(coaches)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Coaches: " + coaches + ";";
    }
    document.getElementById("FighterCoaches").innerHTML = text;
}

function myFunInterviews() {

    let text;
    let interviews = prompt("Give me interviews:", "");
    if (interviews == null || interviews == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(interviews)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Interviews: " + interviews + ";";
    }
    document.getElementById("FighterInterviews").innerHTML = text;
}

function myFunOdds() {

    let text;
    let odds = prompt("Give me odds:", "");
    if (odds == null || odds == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(odds)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Odds: " + odds + ";";
    }
    document.getElementById("FighterOdds").innerHTML = text;
}
