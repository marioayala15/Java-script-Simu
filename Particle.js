function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}


function Particle (radius, x,y) {
  this.radius = radius;
  this.color = "#0000ff";
  this.x = x;
  this.y = y;
  this.clock = 0;
  this.event = false;
}

Particle.prototype.draw = function (context) {
	context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    context.closePath();
    context.fill();
};

Particle.prototype.move = function(context){
  this.x += randomChoice([-1,1]);
};
