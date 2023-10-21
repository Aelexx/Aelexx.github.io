//document.getElementById('test-table');
let windowStyles = `
.window{
    display: none;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    overflow: auto;
    width: 500px;
    height: 500px

}
.window-content{
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

let btn = document.getElementById('btn');
let window = document.getElementById('myWindow'); 
let span = document.getElementsByClassName('close');

btn.onclick = function() {
    window.style.display = 'block';
};

span.onclick = function(){
    window.style.display = 'none';
};

