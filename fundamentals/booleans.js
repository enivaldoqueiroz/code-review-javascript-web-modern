let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros :>> ');
console.log(!!3); // return true
console.log(!!-3);// return true
console.log(!!' ');// return true
console.log(!![]);// return true
console.log(!!{});// return true
console.log(!!Infinity);// return true
console.log(!!(isAtivo = true));// return true


console.log('Os falsos :>> ');
console.log(!!0); // return false
console.log(!!''); // return false
console.log(!!null); // return false
console.log(!!NaN); // return false
console.log(!!undefined); // return false
console.log(!!(isAtivo = false)); // return false