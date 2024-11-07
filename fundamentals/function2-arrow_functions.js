// Armazenamendo uma função uma variavel
const printSoma = function (a, b){
    console.log(a + b);
}

printSoma(2, 3);

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const print2 = a => console.log(a);
print2('Legal!!!');