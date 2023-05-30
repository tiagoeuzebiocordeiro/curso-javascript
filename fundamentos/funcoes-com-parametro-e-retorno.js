function calcularIdade(anoNascimento) {

    const data = new Date();
    
    //GetFullYear pega o ano da data fornecida, no caso, a variavel data vai pegar 2023 no momento atual
    const idade = data.getFullYear() - anoNascimento;

    return idade;
}

let d = new Date();
console.log("D get full Year: " + d.getFullYear());
console.log ("D month: " + (d.getMonth() + 1)); // +1 pq os meses começam com 0 (0 - janeiro, 1 - fevereiro... etc) -> se for fazer isso, colocar parenteses 
console.log(d); // ISO zulu
console.log(calcularIdade(2004));

function somar(x, y) {
    console.log(x + y);
}

somar(4,5); 