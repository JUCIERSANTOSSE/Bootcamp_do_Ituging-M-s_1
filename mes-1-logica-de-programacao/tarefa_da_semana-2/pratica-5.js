
const calculoDeDesconto = function (valor, desconto) {
    
    const valorTotal = valor * (1 - desconto/100);
    return valorTotal;
}
    const valorComDesconto = calculoDeDesconto(100, 10);
    console.log(`O valor total é de: ${valorComDesconto} reais.`);