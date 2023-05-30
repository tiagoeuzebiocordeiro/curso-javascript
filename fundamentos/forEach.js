    //34

    var cursos = [

        "Java",
        "Javascript",
        "Banco de dados",
        "angularjs",
        "english",


    ];

   // console.log(cursos);
    //console.log(cursos.length);

    function imprimir(curso, indice, array) {
        console.log(indice + " - " + curso);
        console.log(array);
    }

   cursos.forEach(imprimir);

   // o foreach tem acesso a 3 parametros, element, index e array
   // String template
   cursos.forEach((element, index) => {
    console.log(`${index} - ${element}`);
   });

   for (var i = 0; i < cursos.length; i++) {
        console.log(i + " - " + cursos[i]);
   }
   


   