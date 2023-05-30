const cursos = [
    "Progamação Web",
    "Algoritmo",
    "Lógica de programação"
];

function apresentar(index, element) {
    console.log(`${element} - ${index}`);
}

cursos.forEach(apresentar); // Callback

console.log("------------------");

cursos.forEach(function(curso, indice) {
    console.log(indice + 1 + " - " + curso);
})

console.log("------------------");


// arrow function
cursos.forEach((curso, indice) => {
    console.log(`${indice} - ${curso}`);
  });

const precos = [23.75, 20.12, 19.02, 8.2];

let maiores = [];

// maiores q 20

for (let p in precos) {
    if (precos[p] > 20.00) {
        maiores.push(precos[p]);
    }
}

console.log(maiores);

//forma resumida

let maiores2 = precos.filter(function(preco) {
    return preco > 20.00;
});

console.log(maiores2);


