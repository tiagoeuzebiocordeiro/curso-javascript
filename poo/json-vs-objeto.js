// JSON -> JavaScript Object Notation

const curso = {
    nome: "Programação em JavaScript",
    horas: 27,
    preco: 25.99,
    autor: "Geek University"
}


// JS object
console.log(curso);
console.log(typeof(curso));


// Json
const json = JSON.stringify(curso);
console.log(json);
console.log(typeof(json));

// da p converter objeto p json tbm, mas precisa estar chave e valor entre aspas duplas, a nao ser q o valor seja um numero