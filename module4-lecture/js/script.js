var a = {
	x: 10
}
var b = a;
console.log("a: " + a.x);
console.log("b: " + b.x);
b.x  = 20;
console.log("a: " + a.x);
console.log("b: " + b.x);