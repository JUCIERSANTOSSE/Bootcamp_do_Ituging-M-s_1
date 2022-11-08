
function traducao (idioma) {
    
    if (idioma === 'en') 
        console.log('Hello, world!');
    else if (idioma === 'es') 
        console.log('Hola mundo!');
    else if (!idioma) 
        console.log('Olá, mundo!');
}

traducao('en');
traducao('es');
traducao();