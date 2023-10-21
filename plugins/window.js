document.body.onload = createElements;
function createElements(){

// Div with text    
const newDiv = document.createElement('div');
const newText = document.createTextNode('Some text here');

const newPar = document.createElement('p');
newPar.setAttribute('id', 'id-newPar');
const txtPar = document.createTextNode('Bioshop');

// Headers <h>
const newH1 = document.createElement('h1');
Object.assign(newH1, {
    id: 'id-h1',
    class: 'class-h1',
    name: 'h1_name',
    style: 'background-color:tomato', 
});
const txtH1 = document.createTextNode('Pirozhok'); 

const newH2 = document.createElement('h2');
newH2.setAttribute('id', 'id-newH2');
const txtH2 = document.createTextNode('Okey!');

// List
const newLi = document.createElement('li');
newLi.setAttribute('id', 'id-Li');
const newLi2 = document.createElement('li');
const newLi3 = document.createElement('li');
const newLi4 = document.createElement('li');

// li's
const txtLi = document.createTextNode('Total scenario, rules in Brasil: How, where, how long and results; Socets 110v or 220v?');
const txtLi2 = document.createTextNode('Music bands, russian communities, friends (girls);');
const txtLi3 = document.createTextNode('Going to Flight WAY BEFORE TIME;');
const txtLi4 = document.createTextNode('Rent apartment in Moscow (20grands + payments for utilities);');
const txtLi5 = document.createTextNode('Rent in Rio, cheap, far from ocean, but with microwave or oven;');
const txtLi6 = document.createTextNode('Work remote via Internet (upwork, fiverr);');
const txtLi7 = document.createTextNode('Language Brazil portuguese');
const txtLi8 = document.createTextNode('Cheap food, favor on fruits via salers on the streets;');
const txtLi9 = document.createTextNode('Economy and dont celebrate until I stable;');
const txtLi10 = document.createTextNode('Plug adapter better buy in Brazil;');
const txtLi11 = document.createTextNode('White clothes, summer clothes to walk around (shorts, t-shorts, sunglasses, white panama);');
const txtLi12 = document.createTextNode('Free wifi in McDonalds and others public places run by owners;');

// Fieldset
const fieldSet = document.createElement('fieldset');
const fieldsetChB = document.createElement('input');
fieldsetChB.setAttribute('type', 'checkbox'); 

// Legend
const newLegend = document.createElement('legend');

// List ordered <ol>
//const divOl = document.createElement('div');
//divOl.setAttribute('id', 'id-divOl');

const newOl = document.createElement('ol');

newOl.setAttribute('style', 'list-style-type:lower-alpha');
newOl.setAttribute('type', '1');
newOl.setAttribute('style', 'color:red');
    

// Child inside parent    
newDiv.appendChild(newText);
newH1.appendChild(txtH1);

newLi.appendChild(txtLi);
newLi2.appendChild(txtLi2);
newLi3.appendChild(txtLi3);
newLi4.appendChild(txtLi4);

newH2.appendChild(txtH2);
newPar.appendChild(txtPar);
fieldSet.appendChild(fieldsetChB);
newOl.appendChild(newLi);


// Input field
const newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('color', 'yellow');

// Button
const newButton = document.createElement('button');
newButton.setAttribute('id', 'id-btn');
newButton.innerText = 'Tont';

// Checkbox
const newCheck = document.createElement('input');
newCheck.setAttribute('type', 'checkbox');
newCheck.setAttribute('checked', '0');
newCheck.innerText = 'Good coder';

// Radio
const newRadio = document.createElement('input');
newRadio.setAttribute('type', 'radio');

// Placement
document.getElementById('rules').appendChild(newDiv);
document.getElementById('rules').appendChild(newH1);
document.getElementById('rules').appendChild(newInput);    
document.getElementById('rules').appendChild(newButton);
document.getElementById('rules').appendChild(newLegend);
document.getElementById('mainPlanList').appendChild(newCheck);
document.getElementById('mainPlanList').appendChild(newRadio);
document.getElementById('rules').appendChild(newOl);
document.getElementById('headerBrasil').appendChild(newH2);
document.getElementById('mainPlanList').appendChild(fieldSet);
document.getElementById('mainPlanList').appendChild(newPar);


// Listeners
newH1.addEventListener('click',() => {
    alert('Hi JS!');
    console.log('Clicked', event.target);
});
newPar.addEventListener('mouseout', () => {
    console.log('Mouse outed'); 
});
newInput.addEventListener('mousemove', () => {
    console.log('Mouse moved');
});
newButton.addEventListener('keypress', () => {
    console.log('Key pressed'); //point on btn and press key ))
});


let myStyles = `
    #id-newH2{
        font-family: Arial;
        text-align: center;
        margin: auto;
    }

    #id-h1{
        font-family: Georgia;
        margin: 30px, auto, 0, auto;
        text-align: center;

    }
    #id-newPar{
        font-family: Georgia;
        margin: 23px, auto, 0, auto;
        text-align: center;
        font-weight: 950;
    }
    #id-btn{
        height: 45px;
        width: 65px;
        color: #AABBCC;
        background-color: #f77;
        type: submit;
        padding: 3px 10px;
        border: 3px solid black;
        display: inline-block;
        font-size: 17px;
        border-radius: 12px;
    }
`
let newMyStyle = document.createElement('style');
newMyStyle.innerText = myStyles;
document.body.appendChild(newMyStyle);

let liAr = ['newLi','newLi2', 'newLi3', 'newLi4'];
console.log(liAr.join());

//JQuery
$(document).ready(function(){
    $('#enter-me').hover(function(){
        $(this).hide();
    });
});
$(document).ready( function(){
    $('#rules').click( function(){
        $(this).slideToggle(1000);
    });
});

$(document).ready(function(){
    $('#btn-ajax').click(function(){
        $(this).scroll();
    });
});
$(document).ready(function(){
    $('#mainCity').hover(function(){
        $(this).blur();
    });
});

$(document).ready(function(){
    $('#id-newPar').hover(function(){
        $(this).alert('OPDSS!');
    });
});
};

// Creation windows
function popupCreate(url){
    popwindow = window.open(url, 'mypopWindow',
    'height=300','width=350', 'left=102','top=500', 'resizable=yes');
};

function window2 (url){
    windowURL = window.open(url, 'windowBM', 
    'height=555', 'width=455', 'top=200', 'left=300', 'resizable=yes',
    'menubar=yes');
};