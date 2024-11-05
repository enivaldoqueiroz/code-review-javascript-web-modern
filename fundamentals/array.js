const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0], values[3]);
console.log(values[4]);

values[4] = 10;
console.log(values);

values.push({id:3}, false, null, 'teste'); // add valores
console.log(values);

values.pop();
console.log(values);

console.log(typeof values);