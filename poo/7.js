    const curso = {
        nome: "Programação em JS",
        preco: 24.99,
        horas: 12,
        dataLancamento: 2020
    }
    console.log(curso);
    console.log("Tipo: " + typeof(curso));

    // Quant de chaves

    console.log("Chaves = "+Object.keys(curso));

    //Values

    console.log("values = "+Object.values(curso));

    console.log(Object.entries(curso));

    console.table(curso);

    // da p fzr array de objetos tb