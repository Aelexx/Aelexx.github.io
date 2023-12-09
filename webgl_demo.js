var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

if (!gl){
    alert ("Your browser needs to be change!");
}

gl.clearColor(0, 0.6, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
