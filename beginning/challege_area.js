//PI = 3.141592 =>  PI * radius  * radius

const PI = 3.141592
const radius = 10;
const areaCirc = PI * radius * radius;
const areaCircWithMathPI = Math.PI * radius * radius;

console.log('The area value is :>> ', areaCirc + " m2");
console.log('The area value is :>> ', areaCircWithMathPI + " m2");