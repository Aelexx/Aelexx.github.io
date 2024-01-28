/* The `myFun()` function is prompting the user to enter their name using the `prompt()` function. It
then checks if the user entered a value or cancelled the prompt. If the user entered a value, it
assigns the value to the `fighter` variable and creates a string using the value. If the user
cancelled the prompt or did not enter a value, it assigns a different string to the `text` variable.
Finally, it sets the innerHTML of an element with the id "demo" to the value of the `text` variable. */
function myFun() {

    let text;
    let fighter = prompt("Input name of fighter:", "...");
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                    return true;
                else
                    return false;
    if (fighter == null || fighter == "" || fighter == '0-9') {
    text = "Count run is over! Try it again.";
    } else {
    text = "Fighter: " + fighter + " now in the base";
    }
    document.getElementById("messFightersName").innerHTML = text;
}