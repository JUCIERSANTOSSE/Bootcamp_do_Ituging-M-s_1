
function numeroAleatorio () {
    const minimo = 0;
    const maximo = 10000;
    const numero = Math.floor(Math.random()*(maximo - minimo + 1)) + minimo;
    return numero;
}
console.log(numeroAleatorio());