{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste() {
    var local = 123 // só sera visível dentro do escopo da função
    console.log(local);
}

teste();
console.log(local); // retorna o erro 'local is not defined'