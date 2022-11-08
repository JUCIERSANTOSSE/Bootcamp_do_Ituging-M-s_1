let valores = [4, 9, 7, 1, 8, 12];

let numeros = valores.sort(function(a, b) {
    return a - b;
});

console.log(numeros);