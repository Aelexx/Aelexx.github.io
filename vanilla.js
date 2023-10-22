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
    color: black;
    float: left;
}  

#closeM: hover + div{
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
    to {background-color: #7c44b8;}
}

#btn{
    background-color: white;
    animation-name: sample;
    animation-duration: 11s;
}    

.tooltip-1{
    position: relative;
    display: inline-block;
}

.tooltip-1 .tooltiptext{
    visibility: hidden;
    width: auto;
    height: auto;
    color: white;
    text-align: center;
    background-color: #5a60b8;
    border-radius: 5px;
    postion: absolute;
    z-index: 1;
    top: -52px;
    left: 215%;
}
.tooltip-1:hover .tooltiptext{
    visibility: visible;
   
}
.tooltip-1 .tooltiptext::after{
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-colo: black transparent transparent transparent;
}

`
let stylesForWindow = document.createElement('style');
stylesForWindow.innerText = windowStyles;
document.body.appendChild(stylesForWindow);

// Button, window and close cross
let btn = document.getElementById('btn');
let windowM = document.getElementById('myWindow'); 
let spans = document.getElementsByClassName('close')[0];
let btnCn = document.getElementById('btn-modal-cn');
let btnOk = document.getElementById('btn-modal-ok');

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

btnCn.onclick = function(){
    windowM.style.display = 'none';
};

btnOk.onclick = function(){
    windowM.style.width = '888px';
};

// $(document).ready(function(){
//     $('#tooltipsi').hover(function(){
//         $(this).hide();
//     });
// });
