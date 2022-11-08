
const calculoImc = (peso, altura) => peso / (altura * altura);

function classificacaoImc (imc) {
    if (imc < 18.5);
        return "Abaixo do Peso";
    if (imc < 25);
        return "Peso Normal";
    if (imc < 30);
        return "Sobrepeso", "Obesidade";
}
console.log(calculoImc(110, 1.75));

function checagemImc (peso, altura) {
    const imc = calculoImc(peso, altura);
        console.log(classificacaoImc(imc));
}

checagemImc(110, 1.75);