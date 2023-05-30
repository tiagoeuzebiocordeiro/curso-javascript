var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function pair_filter(x) {
    return  x % 2 === 0;
}

/*The filter function create a new array with only the pair values of the original array

Also, the value who return "true" will be intered in to the vector result.

*/ 
var result = values.filter(pair_filter);

console.log(result);