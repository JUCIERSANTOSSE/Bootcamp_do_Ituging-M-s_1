
function venda(nome){
    console.log('Olá '+ nome);
}
    venda('Jucier');
    
function entrega(produto, endereco, destinatario) {
    console.log(`Fizemos a entrega do produto ${produto} no endereço: ${endereco} com sucesso! O seu produto foi recebido por: ${destinatario}. Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}
    entrega('Iphone','Rua sem nome, número 0','Miguel Freire');

function remetente(vendedor){
    console.log('Atenciosamente, ' + vendedor);
}
    remetente('Tatiana');