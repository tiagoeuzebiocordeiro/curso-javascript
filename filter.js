var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function pair_filter(x) {
    return  x % 2 === 0;
}

var result = values.filter(pair_filter);

console.log(result);