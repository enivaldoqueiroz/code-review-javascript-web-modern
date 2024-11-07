// Hoisting - Içamento de variaveis do tipo var
console.log('a =', a);
var a = 2;
console.log('a =', a);

// Hoisting - Içamento de variaveis do tipo let
console.log('a =', b); // retorna 'Cannot access 'b' before initialization'
let b = 2;
console.log('a =', b);
