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

function myFunLost() {

    let text2;
    let lost = prompt("How many losses?:", "");
    if (lost == null || lost == "")
        {
    text = "Count run is over! Try it again.";
    } 
    else if (!/^[0-9]+$/.test(lost)) {
        alert("Only numbers allowed");
        validate()
    } 
    
    else {
    text = "Wins: " + lost + " now in the base";
    }
    document.getElementById("messFightersName").innerHTML = text;
}

function Cupcakes(type, name, description, Price, cost, image){
    this.type = type; //create an instant of object
    this.name = name;
    this.description = description;
    this.Price = Price;
    this.cost = cost;
    thi.image = image;
    this.displayInfo = function(){
      var info ="<div class='divCell1' id = 'line1'>";
      info += this.name + "</div><div class='divCell2' id = 'line2'>";
      info += this.description + "</div><div class='divCell3' id = 'line3'>";
      info += this.Price + "<div>Price <br>";
      info += this.cost + "</div><div class = 'divCell4' id='line4'>";
      info += this.image + "</div>";
      return info;
    }   
}

// define an array to store products
var product_list = [];
var cart = [];
var cost = "Half Dozen: $7.00 <br> Dozen:  $12.50 <br> Party Size [20 cupcakes]:  $18.00"
var desc1 = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci elit, lobortis nec neque in, condimentum gravida velit. Suspendisse maximus nisl et vehicula placerat. Sed elit turpis, venenatis sit amet tortor vel, interdum cursus mi.';  
var image = " ";
var product = new Products('cupcake','Winter Festival', desc1, 15.99);
product_list.push(product);