const nome = "Dummy";
const idade = 10;


// Sintaxe: entre crases (`exemplo`) e quando for acessar variaveis usar ${variavel}:
console.log(`${nome} tem ${idade} anos`);

// conseguimos fazer com funções tambem

function soma_3(idade) {
    return idade + 3;

}

console.log(`${nome} tem ${soma_3(idade)} anos`);
