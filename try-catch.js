//let nome = "Tiago";

try {
    console.log(nome);
} catch (e) {
    console.log("ERRO");
    console.log(e.name);
    console.log(e.message);
}

console.log("oi");
console.log("-----------");

function dividir(x, y) {
    if (x === 0 || y === 0) {
        throw ("Valores devem ser positivos");
    } else {
        return x / y;
    }


}
try {
    console.log(dividir(0, 2));

} catch (e) {
    console.log("erro, valores abaixo de 0");   // exemplo
} finally {
    console.log("Vamos continuar...");
}