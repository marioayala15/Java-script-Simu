var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var numParticles = 1;
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
	setInterval(onEachStep, 1000/60); // 60 fps
};


function onEachStep() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i=0; i<numParticles; i++){
		var particle = particles[i];
    particle.move(context);

		if (particle.y > canvas.height - radius){
			particle.y = canvas.height - radius;
		}
		if (particle.x > canvas.width + radius){
			particle.x = -radius;
		}
		particle.draw(context);
	}
};
