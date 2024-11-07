// Função sem retorno
function printSoma(a, b){
    console.log(a+b);
};

printSoma(2, 3); // retorna 5
printSoma(2); // retorna NaN
printSoma(2, 10, 4, 5, 6, 7, 8); // retorna 12
printSoma(); // retorna NaN

// Função com retorno
function soma(a, b = 1){
    return a + b;
};

console.log(soma(2,3))
console.log(soma(2))
console.log(soma(0))