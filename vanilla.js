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
    height: 500px;
    background-color: #aabbcc;

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
    color: red;
    text-decoration: none;
    cursor: pointer;
}
#headerM{
    background-color: #358287;
    text-decoration: underline overline;
    color: white;
}
#bodyM{
    background-color: #81ba57;
    text-decoration: line through;
    color: white;
}
#footerM{
    background-color: #d4c64e;
    text-decoration: underline;
    color: white;
}
`
let stylesForWindow = document.createElement('style');
stylesForWindow.innerText = windowStyles;
document.body.appendChild(stylesForWindow);

// Button, window and close cross
let btn = document.getElementById('btn');
let windowM = document.getElementById('myWindow'); 
let spans = document.getElementsByClassName('close')[0];

// Events
btn.onclick = function() {
    if(windowM.style.display === 'none'){
        window.style.display = 'block'
    }
        else{
            window.style.display = 'block'
        };
    
    };


spans.onclick = function(){
    windowM.style.display = 'none';
};

window.onclick = function(event){
    if(event.target == windowM){
        windowM.style.display = 'none';
    };
};

