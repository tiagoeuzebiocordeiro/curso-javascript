// Estruturas condicionais em javascript

    var x = 10;
    var y = 20;

    if (x > y) {
        console.log("x é maior que y");
    } else {
        console.log("x não é maior que y");
    }

    if (x < y && x > 5) {
        console.log("todos verdadeiros")
    }  // todos verdadeiros

    if (x > y || x > 5) {
        console.log("apenas um verdadeiro, x é maior que 5 (10>5)");
    } // apenas um verdadeiro

    if (x > y && x > 12) { // 10 > 20 (F) && 10 > 12 (F) 
        console.log("todo falso");
    } else {
        console.log("Os dois sao falsos");
    } // todo errado


    if (1 == "1") {
        console.log("sim");
    }

    var diaDaSemana = prompt("Qual o numero do dia da semana ? ( 1 - 7 ): ");

    switch (parseInt(diaDaSemana)) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        case 3:
            console.log("Terça");
            break;
        case 4:
            console.log("Quarta");
            break;
        case 5:
            console.log("Quinta");
            break;
        case 6:
            console.log("Sexta");
            break;
        case 7:
            console.log("Sabado");
            break;
        default:
            console.log("Desconhecido");
            break;
    }