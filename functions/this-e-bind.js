const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao); // para acessar o atributo saudacao usamos 'this'
    }
}

pessoa.falar();

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

const falar2 = pessoa.falar
falar2()