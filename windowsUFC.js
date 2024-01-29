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
    text = "Fighter: " + name + " now in the base";
    }
    document.getElementById("FighterName").innerHTML = text;
}

function myFunWin() {

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
    text = "Wins: " + win + " now in the base";
    }
    document.getElementById("FighterWins").innerHTML = text;
}

function myFunLosses() {

    let text2;
    let losses = prompt("How many wins?:", "");
    if (losses == null || losses == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(losses)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wins: " + losses + " now in the base";
    }
    document.getElementById("FighterLosses").innerHTML = text;
}

function myFunLosses() {

    let text2;
    let losses = prompt("How many wins?:", "");
    if (losses == null || losses == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(losses)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wins: " + losses + " now in the base";
    }
    document.getElementById("FighterLosses").innerHTML = text;
}