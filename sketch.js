//http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
var c = 0;
var a = 0;
var angles = [];
var radio;

function setup() {
  createCanvas(500, 500);
  phi = (0.5) + (sqrt(5) / 2);
  

  angles = [137.3, 137.5, 137.6];
  radio = createRadio();
  radio.option(angles[0]);
  radio.option(angles[1]);
  radio.option(angles[2]);
  
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  var start = 0;
  var num;
  var animate = 5;
  var n = 0;
  var i = 0;

  while (n < 1000) {
    var theta = n * radio.value();
    r = animate * sqrt(n);
    num = sin(start);
    animate = map(num, -1, 1, 5, 10);
    var x = r * cos(theta);
    var y = r * sin(theta);

    fill(255, 0, random(255));
    circle(x, y, 5);

  // }
    n++;
  }
}
