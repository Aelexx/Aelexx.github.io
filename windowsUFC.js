/* The `myFun()` function is prompting the user to enter their name using the `prompt()` function. It
then checks if the user entered a value or cancelled the prompt. If the user entered a value, it
assigns the value to the `fighter` variable and creates a string using the value. If the user
cancelled the prompt or did not enter a value, it assigns a different string to the `text` variable.
Finally, it sets the innerHTML of an element with the id "demo" to the value of the `text` variable. */
function myFunName() {

    let text;
    let name = prompt("Input name of fighter:", "");
    if (name == null || name == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Only letters we need");
        validate()
    } 

    
    else {
    text ="Name: " + name + ";";
    }
    document.getElementById("FighterName").innerHTML = text;
}

function myFunWins() {

    let text2;
    let win = prompt("How many wins?:", "");
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

function myFunLosses() {

    let text2;
    let losses = prompt("How many losses?:", "");
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

function myFunDraws() {

    let text2;
    let draws = prompt("How many draws?:", "");
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

function myFunNCs() {

    let text2;
    let NCs = prompt("How many NC's?:", "");
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

function myFunFinishes() {

    let text2;
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

    let text2;
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

    let text2;
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

function myFunWins() {

    let text2;
    let win = prompt("How many wins?:", "");
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

function myFunFinishes() {

    let text2;
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

function myFunAge() {

    let text2;
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

    let text2;
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

    let text2;
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

    let text2;
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

    let text2;
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

    let text2;
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

    let text2;
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

