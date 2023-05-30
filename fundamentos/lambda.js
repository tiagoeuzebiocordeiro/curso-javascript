let numeros = [1, 2, 3, 4, 5];

function dobrar(valor) {
    return valor * 2;
}

// Metodo 1
console.log("Normal = " + numeros.map(dobrar));

// Metodo 2 -> Lambda
let numerosLambda = numeros.map(function(valor) {
    return valor * 2;
});

console.log("Lambda = " + numerosLambda);

