let palavra = 'Sofia';

(function() {

    document.write(`Essa palavra tem ${palavra.length} caracteres <br>`);
    document.write(`Essa palavra tem ${palavra} ficou ${palavra.toUpperCase()} <br>`);
    document.write(`A letra '${palavra[3]}' é o 3° caracter <br>`);
    document.write(`${palavra.length} ficou ${palavra.replace(palavra[3], 'x')}`);
}) (palavra)