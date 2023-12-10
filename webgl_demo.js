var canvas = document.getElementById('mycanvas');
var gl = canvas.getContext('experimental-webgl');

gl.clearColor(0.2, 0.3, 0.5, 1.6);
gl.clear(gl.COLOR_BUFFER_BIT);

var vertices = [0.3, 0.3, 0.3,-0.5,-0.5,-0.5];
var vertex_buffer = gl.createBuffer();

gl.bind_Buffer(gl.ARRAY_BUFFER, vertex_buffer)

