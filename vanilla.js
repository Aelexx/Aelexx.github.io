//document.getElementById('test-table');
let windowStyles = `
.windowM{
    display: none;
    position: fixed;
    z-index: 2;
    left: 300px;
    top: 100px;
    overflow: auto;
    width: 500px;
    height: 500px;
    background-color: #9bcdd1;

}
.windowM-content{
    padding: 21px;
    background-color: white;
    margin: 17%;

}

#closeM{
    color: blue;
    float: left;
}  
#closeM: hover{
    color: white;
}

#closeM: tabindex{
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
@keyframes sample{
    from {background-color: white;}
    to {background-color: red;}

#btn{
    background-color: white;
    animation-name: sample;
    animation-duration: 3s;
}    

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
    if(windowM.style.display === 'block'){
        windowM.style.display = 'none'
    }
        else{
            windowM.style.display = 'block'
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

