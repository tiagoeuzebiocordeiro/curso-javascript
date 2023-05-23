function somar() {

    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i]
    }
    return soma;
}

console.log("Primeira Function Somar = " + somar(4,5,2));

function somar2(num1 = 5, num2 = 3, num3 = 4) {
    if (Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)) {
        return num1 + num2 + num3;
    } else {
        return "Não foi possível realizar a soma";
    }
}

console.log(somar2("a",4,5)); // Não soma
console.log(somar2(2,1,3)); // Soma = 6
    