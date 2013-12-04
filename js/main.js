

navigator.getUserMedia = ( navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

var capture, filmstrip;
var bt_capture;

var initCapture = function() {
	navigator.getUserMedia( {video: true}, function(stream) {
		var url = URL.createObjectURL(stream);
		capture.src = url;
	});
};

var doCapture = function() {
	var g = document.createElement('canvas').getContext('2d');
	g.canvas.width = capture.videoWidth;
	g.canvas.height = capture.videoHeight;
	g.canvas.className = 'film';
	g.drawImage(capture, 0, 0);
	capture.style.display = "none";
	
	filmstrip.appendChild(g.canvas);
};

var init = function() {
	capture = document.querySelector('#capture');
	filmstrip = document.querySelector('#filmstrip');
	
	bt_capture = document.querySelector('#bt-capture');
	bt_capture.onclick = doCapture;
	
	initCapture();
};

window.onload = function() {
	init();
};