function Pessoa(){
    this.idade = 0

    const selt = this
    console.log(selt); // retorna 'Pessoa { idade: 0 }'
    setInterval(function() {
        selt.idade++
        console.log(selt.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa