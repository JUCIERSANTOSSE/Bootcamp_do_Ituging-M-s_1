
const avaliacao = (filme) => {
    
    console.log(`O filme de melhor avaliação com nota ${media.notaAvaliacao} é: ${media.titulo}`)

    let nota = media.sort(function(a, b) {
        return a - b;
    });
};

let media = 
[{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }];

  avaliacao();