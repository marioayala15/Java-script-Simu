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
  if (this.x > canvas.width + radius){
    this.x = -radius;
  }

  if (this.y > canvas.height - radius){
    this.y = canvas.height - radius;
  }
};

Particle.prototype.rwclock= function(context,alpha){
  this.clock=randomExp(alpha)
};
