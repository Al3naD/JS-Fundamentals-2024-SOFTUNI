function cone(r,h) {
let volume=(Math.PI*r*r*h/3).toFixed(4);
let s = Math.sqrt(r * r + h * h);
let area=(Math.PI *r*(r+s)).toFixed(4);

console.log(`volume = ${volume}`);
console.log(`area = ${area}`);
}
cone(3.3,7.8);