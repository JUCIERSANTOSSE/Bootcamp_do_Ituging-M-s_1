
const exibeFilme = (filme) => {
    console.log(`O filme ${filme.titulo} que estreou em 2016 tem a avaliação de 7.8 pelo IMDb e tem ${filme.duracao} minutos de duração.`);
}    

    let f = {
        titulo: "Estrelas Além do Tempo",
        nota: 7.8,
        duracao: 127,
        anoPublicação: 2016,
        categoria: ["Drama"]
    };

exibeFilme(f);