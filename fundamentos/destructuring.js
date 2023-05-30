const numeros = [11, 22, 31, 32, 55];

//destruct
const [x, y, z, w, a] = numeros;

console.log(x);
console.log(y);
console.log(z);
console.log(w);
console.log(a);

// posso colocar valores defaults e desconsiderar numeros tb
console.log("------------------")
const [n1, , n2, , , n5 = 99] = numeros;
console.log(n1);
console.log(n2);

console.log(n5);
const numeros2 = [11, 22, 31, 32, 55, 6];
const [v1, v2, v3, v4, v5, v6 = 34] = numeros2;
console.log(v6);

// destruturando objetos

const produto = {

    nome: "Creatina 250g",
    preco: 80.00

}

const {nome} = produto;
console.log(nome);

const {nomep, precop} = produto;
console.log(nomep); // nome da var tem que ser igual o nome do atributo do objeto