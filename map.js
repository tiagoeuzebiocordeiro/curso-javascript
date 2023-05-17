    // mapear os dados do array, aplicar a transformação e gerar um novo array de novo tamanho com dados diferentes/transformados

    var vector = [12, 24, 92, 123, 99];

    var dobro = vector.map(function(valor) {
        return valor * 2;
    });

    console.log("Vetor = " + vector);
    console.log("Dobro do vetor = " + dobro);
    console.log("Tamanho = " + dobro.length);

    // encadeando o map para realizar multiplas transformações

    function soma_4(valor) {
        return valor + 4;
    }

    function dividir_por_5(valor) {
        return valor / 5;
    }

    // conseguimos trabalhar o .map com parametro de valor
    var resultado = dobro.map(soma_4).map(dividir_por_5);
    console.log(resultado);

    // dica: diferença de map x forEach = map gera um novo array, o foreach pecorre (para cada) elemento/index do vetor.