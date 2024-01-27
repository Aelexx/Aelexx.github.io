/* The `myFun()` function is prompting the user to enter their name using the `prompt()` function. It
then checks if the user entered a value or cancelled the prompt. If the user entered a value, it
assigns the value to the `fighter` variable and creates a string using the value. If the user
cancelled the prompt or did not enter a value, it assigns a different string to the `text` variable.
Finally, it sets the innerHTML of an element with the id "demo" to the value of the `text` variable. */
function myFun() {
    /* The line `let text;` is declaring a variable named `text` using the `let` keyword. This variable
    is initially undefined and will be used to store a string value later in the code. */
    let text;
    /* The variable `fighter` is used to store the value entered by the user in response to the
    prompt. */
    let fighter = prompt("Input name of fighter:", "Name of fighter");
    if (fighter == null || fighter == "") {
    text = "You cancelled the count run";
    } else {
    text = "Fighter: " + fighter + "Got it in base";
    }
    document.getElementById("demo").innerHTML = text;
}