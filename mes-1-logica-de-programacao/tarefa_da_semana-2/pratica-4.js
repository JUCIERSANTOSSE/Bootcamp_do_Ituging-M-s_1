
function calculoDeDesconto(valor, desconto){
    
    const valorTotal = valor * (1 - desconto/100);
    return valorTotal;
}
console.log(calculoDeDesconto(100,25));