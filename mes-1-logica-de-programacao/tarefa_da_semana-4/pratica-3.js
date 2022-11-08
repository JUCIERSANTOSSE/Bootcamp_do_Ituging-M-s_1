
let filtraLista = (lista, valor) => {
    let novaLista = listaSeriados.filter(function(item){
        return item.length == "Th";
    });
    
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.table(filtraLista("Th"));