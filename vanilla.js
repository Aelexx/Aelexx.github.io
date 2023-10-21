//document.getElementById('test-table');
let windowStyles = `
.windowM{
    display: none;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    overflow: auto;
    width: 500px;
    height: 500px

}
.windowM-content{
    padding: 30px;
    background-color: white;
    margin: 15%;

}

.close{
    color: blue;
    float: right;
}  
.close: hover,
.close: focus{
    color: #aabbcc;
    text-decoration: none;
    cursor: pointer;
}
`
let stylesForWindow = document.createElement('style');
stylesForWindow.innerText = windowStyles;
document.body.appendChild(stylesForWindow);

// Button, window and close cross
let btn = document.getElementById('btn');
let windowM = document.getElementById('myWindow'); 
let span = document.getElementsByClassName('close')[0];

// Events
btn.onclick = function() {
    windowM.style.display = 'block';
};

span.onclick = function(){
    windowM.style.display = 'none';
};

window.onclick = function(event){
    if(event.target == windowM){
        windowM.style.display = 'none';
    };
};
