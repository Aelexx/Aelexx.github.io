document.body.onload = createElements;
function createElements(){

// Fieldset
const fieldSet = document.createElement('fieldset');
// List ordered
const newOl = document.createElement('ol');
newOl.setAttribute('type', '1');
newOl.setAttribute('style', 'list-style-type:upper-roman');
//newList.setAttribute('type', '1');    

// List
const newLi = document.createElement('li');
newLi.setAttribute('value', '1');

// Text for li
const txtLi = document.createTextNode('Text for li')    

// Div with text    
const newDiv = document.createElement('div');
const newText = document.createTextNode('Some text here');

const newPar = document.createElement('p');
const txtPar = document.createTextNode('Bioshop');


//newText.setAttribute('font', );

// Headers <h>
const newH1 = document.createElement('h1');
Object.assign(newPar, {
    id: 'id-h1',
    class: 'class-h1',
    name: 'h1_name',
    style: 'background-color:tomato'});
const txtH1 = document.createTextNode('Pirozhok'); 

const newH2 = document.createElement('h2');
const txtH2 = document.createTextNode('Okey!');

// Child inside parent    
newDiv.appendChild(newText);
newH1.appendChild(txtH1);
newOl.appendChild(newLi);
newLi.appendChild(txtLi);
newH2.appendChild(txtH2);
newPar.appendChild(txtPar);

// Input field
const newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('color', 'yellow');

// Button
const newButton = document.createElement('button');
newButton.setAttribute('type', 'submit');
newButton.setAttribute('text', 'submits');

// Checkbox
const newCheck = document.createElement('input');
newCheck.setAttribute('type', 'checkbox');
newCheck.setAttribute('checked', 'true');

// Radio
const newRadio = document.createElement('input');
newRadio.setAttribute('type', 'radio');

// Placement
document.getElementById('rules').appendChild(newDiv);
document.getElementById('rules').appendChild(newH1);
document.getElementById('rules').appendChild(newInput);    
document.getElementById('rules').appendChild(newButton);
//document.getElementById('id-h1').appendChild(newCheck);
document.getElementById('id-h1').appendChild(newRadio);
document.getElementById('rules').appendChild(newOl);
document.getElementById('rules').appendChild(newH2);
document.getElementById('id-h1').appendChild(fieldSet);
document.getElementById('id-h1').appendChild(newPar);
// Listeners
let newParlisn = document.querySelector('.class-h1');
newParlisn = addEventListener('click', event =>{
    console.log('Clicks', event.target);
});
};







