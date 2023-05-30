console.log(nome); // undefined

var nome = "Test"; // temos que usar o var para entender o conceito

/*o que js faz no hoisting?

ele iça a declaração da variavel

exemplo

PRIMEIRA LINHA: console.log(idade);
SEGUNDA LINHA: var idade = 10;

ELE VAI FAZER ISSO

Primeira linha: var idade; 
segunda linha: console.log(idade); // undefined
terceira linha: idade = 10;

ele vai tirar o VAR da idade da declaração e declarar em cima da chamada do console.log, ele iça a variavel
declaração da variavel automatica durante a execução do programa

*/ 



console.log(nome); // agora vai imprimir o valor atribuido