var form = document.getElementById('stbtn');
form.style.display = 'none';

var processing = document.createElement('span');
processing.appendChild(document.createTextNode('processing ...'));

form.parentNode.insertBefore(processing, form);