var canvas;
var gl;
var program;
var attrPosition;
var attrColor; // used later
var unfmScale;
var unfmAspect;
var triangleBuffer;

function setup() {
  canvas = document.getElementById("glCanvas");
  gl = canvas.getContext("experimental-webgl", {antialias: true});

  gl.clearColor(.05, .23, .3, 1); // set the background color to clear with
}