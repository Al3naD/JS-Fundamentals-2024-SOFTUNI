function distanceBetweenPoints(x1,y1,x2,y2) {
let x=y2-y1;
let y=x2-x1;

let distance= Math.sqrt(x*x + y*y);
console.log(distance);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);