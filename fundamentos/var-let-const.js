// diferenças entre esses tipos


//var

var x = 20;
console.log("X=" + x);

x += 2;
console.log("X+2="+x);

//Let

let y = 40;
console.log("Y="+y);

y += 2;
console.log("Y+2=" + y);

/*Eu consigo redeclarar o nome da variavel se for var, com let não, let é local e var global, let é mais seguro

se eu tiver um for e tiver um let lá dentro e eu tentar acessar o valor dele dps com um console.log, vai dar erro

*/ 

// const

const TAX = 4.55;

let salary = 1000 * TAX;
console.log(salary);

// não posso alterar o valor da constante...

// por exemplo, TAX = 4.67;



