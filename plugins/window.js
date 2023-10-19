document.body.onload = createElements;
function createElements(){

// Div with text    
const newDiv = document.createElement('div');
const newText = document.createTextNode('Some text here');

const newPar = document.createElement('p');
const txtPar = document.createTextNode('Bioshop');

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

// List
const newLi = document.createElement('li');
newLi.setAttribute('value', '1');
const newLi2 = document.createElement('li');
newLi.setAttribute('value', '2');
const newLi3 = document.createElement('li');
newLi.setAttribute('value', '3');
const newLi4 = document.createElement('li');
newLi.setAttribute('value', '4');

// Text for li
const txtLi = document.createTextNode('Total scenario, rules in Brasil: How, where, how long and results; Socets 110v or 220v?');
const txtLi2 = document.createTextNode('Music bands, russian communities, friends (girls);');
const txtLi3 = document.createTextNode('Going to Flight WAY BEFORE TIME;');
const txtLi4 = document.createTextNode('Rent apartment in Moscow (20grands + payments for utilities);');

// Fieldset
const fieldSet = document.createElement('fieldset');

// List ordered <ol>
const newOl = document.createElement('ol');
newOl.setAttribute('type', '1');
newOl.setAttribute('style', 'list-style-type:upper-roman');
//newList.setAttribute('type', '1');     

// Child inside parent    
newDiv.appendChild(newText);
newH1.appendChild(txtH1);

newOl.appendChild(newLi);
newLi.appendChild(txtLi);
newLi2.appendChild(txtLi2);
newLi3.appendChild(txtLi3);
newLi4.appendChild(txtLi4);

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
document.getElementById('mainPlanList').appendChild(newCheck);
document.getElementById('mainPlanList').appendChild(newRadio);
document.getElementById('rules').appendChild(newOl);
document.getElementById('rules').appendChild(newH2);
document.getElementById('mainPlanList').appendChild(fieldSet);
document.getElementById('mainPlanList').appendChild(newPar);

};

// Listeners
let newParlisn = document.querySelector('.class-h1');
newParlisn = addEventListener('click', event =>{
    console.log('Clicks', event.target);
});





