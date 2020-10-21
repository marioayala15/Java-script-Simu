var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


//Model parameters
var alpha = 5;



//Dispplay parameters
var radius = 10;
var numParticles = 20;
var particle;

window.onload = init;


function init() {
	particles = new Array();
	for (var i=0; i<numParticles; i++){
    var xpos = canvas.width*Math.random();
    var ypos = canvas.height-radius;
		var particle = new Particle(radius,xpos,ypos);
		particle.draw(context);
		particles.push(particle);
	}
	setInterval(onEachStep, 1000/10000); // 60 fps
};


function onEachStep() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	var index = Math.floor(numParticles * Math.random());
	var particle = particles[index];
	particle.move(context);
	
	for (i=0; i< numParticles; i++){
		var particle =particles[i];
		particle.draw(context);
	}
};
