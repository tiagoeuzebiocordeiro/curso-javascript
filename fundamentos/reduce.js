var precos = [4.66, 3.76, 1.34, 9.99, 5.00];


var soma = 0.0;

precos.forEach(element => {
    soma += element;
});

// we can do like this too

var soma = 0.0; // reset

// sum function
function somar(anterior, atual) {
    return anterior + atual;

}

var red = precos.reduce(somar);

// how reduce works?

/*

lets take our array
var precos = [4.66, 3.76, 1.34, 9.99, 5.00];

1st exec: 4.66 + 3.76 = 
2nd exec: 1st exec sum + 1.34...
..
..
..
till the end of array, always working with index sum

*/ 
console.log("Red: " + red);