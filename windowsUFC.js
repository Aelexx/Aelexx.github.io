/* The `myFun()` function is prompting the user to enter their name using the `prompt()` function. It
then checks if the user entered a value or cancelled the prompt. If the user entered a value, it
assigns the value to the `fighter` variable and creates a string using the value. If the user
cancelled the prompt or did not enter a value, it assigns a different string to the `text` variable.
Finally, it sets the innerHTML of an element with the id "demo" to the value of the `text` variable. */
function myFun() {

    let text;
    let fighter = prompt("Input name of fighter:", "");
    if (fighter == null || fighter == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[a-zA-Z ]+$/.test(fighter)) {
        alert("Only letters we need");
        validate()
    } 
    
    else {
    text = "Fighter: " + fighter + " now in the base";
    }
    document.getElementById("messFightersName").innerHTML = text;
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
    document.getElementById("messFightersName").innerHTML = text;
}

//pop1 
var e = document.getElementById('popupBoxOnePosition');
 var close = document.getElementById('closebox1');

document.getElementById('box1').addEventListener('click', function(){
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
});

// When the user clicks on Click here to close modal
close.onclick = function() {
    e.style.display = "none";
}

//pop2 js
 var elpopupBoxTwoPosition = document.getElementById('popupBoxTwoPosition');
 var closeclosebox2 = document.getElementById('closebox2');

document.getElementById('box2').addEventListener('click', function(){
  if(elpopupBoxTwoPosition.style.display == 'block')
    elpopupBoxTwoPosition.style.display = 'none';
  else
    elpopupBoxTwoPosition.style.display = 'block';
});
  
// When the user clicks on Click here to close modal
closeclosebox2.onclick = function() {
    elpopupBoxTwoPosition.style.display = "none";
}