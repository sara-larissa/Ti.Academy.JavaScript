//Match( ) esse método procura uma palavra em uma string.
//g - analisa tudo /i - não diferenciar entre caixa alta e baixa /m -  retorna uma string

// let nome = "Sara Souza";

// console.log(nome.match("z")); // pode ser uma letra ou um nome 

/* -------------------------------------------------------------*/


// serach( ) procura pela ocorrencia e retornando a posição da cadeia da string

// console.log(nome.search(/O/i)); // ele trás apenas a posição em que está o Z

/* -------------------------------------------------------------*/


// replace( ) Este método procura pela ocorrencia e retornando a posição na cadeia da string

// let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nostrum nobis, natus quibusdam eveniet tempora. Molestiae quia dolor atque iure ea maxime, autem incidunt fugit quas, veniam nulla. Commodi, pariatur!`;

// let strOutra = str.replace( /sit/gi,"não sei" ); // alterou todas as letras i por y

// console.log(strOutra);

/* -------------------------------------------------------------*/

//O método localeCompare( ) compara efetua a comparação entre duas strings (não é 100% essas comparações)

/*let gato = "gatinho";
let outroGato = "gatinho";

console.log(gato.localeCompare(outroGato));*/


/* -------------------------------------------------------------*/

//toString( ) O uso da toString irá converter um valor qualquer em uma string.

/*let num = Number('10');

console.log(num.toString()); - se não precisar ser uma string tem que tirar esse .toString()..*/


/* -------------------------------------------------------------*/

//toLowerCase( ) faz a conversão de uma string inteira para caracteristicas minusculas (caixa baixa) - Exemplo: o L da palavra Lorem e todas as outras letras ficarão minusculas.

/* let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nostrum nobis, natus quibusdam eveniet tempora. Molestiae quia dolor atque iure ea maxime, autem incidunt fugit quas, veniam nulla. Commodi, pariatur!`;

----

console.log(str.toLowerCase()); 

let gato = "gatinho";
let outroGato = "GATINHO";

let cat1 = gato.toLowerCase();
let cat2 = outroGato.toLocaleLowerCase();

console.log(cat1.localeCompare(cat2)); */

/* -------------------------------------------------------------*/

//toUpperCase( ) faz a conversão de uma string inteira para caracteristicas Maiusculas (caixa baixa) - Exemplo: o L da palavra Lorem e todas as outras letras ficarão maiusculas.

/* let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nostrum nobis, natus quibusdam eveniet tempora. Molestiae quia dolor atque iure ea maxime, autem incidunt fugit quas, veniam nulla. Commodi, pariatur!`;

console.log(str.toUpperCase()); */

/* -------------------------------------------------------------*/

//trim( ) faz a remoção de espaços antes e depois da string especificada;

/* let str1 = "           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nostrum nobis, natus quibusdam eveniet tempora. Molestiae quia dolor atque iure ea maxime, autem incidunt fugit quas, veniam nulla. Commodi, pariatur!";

// document.write(str1.trim() + "<br>"); 

console.log(str1.trim());

let str2 = "            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nostrum nobis, natus quibusdam eveniet tempora. Molestiae quia dolor atque iure ea maxime, autem incidunt fugit quas, veniam nulla. Commodi, pariatur!";

// document.write(str1.trim() + "<br>");

console.log(str2); */

/* -------------------------------------------------------------*/

//NaN
//Quando uma string for passada para Number( ), parseInt ou parseFloat e não consiga efetuar a conversão será retornado NaN (Not as Nunber).
//isNaN

/* 
let num = Number("oio");
console.log(num);
*/

/* 
let num = "oo";
console.log(isNaN('8i'));

if(!isNaN(num)){
    console.log("Isto é um número");
} else {
    console.log("Isto não é um número");
}

*/

/* -------------------------------------------------------------*/

//toFixed( ) Analisa um valor flutuante e retorna uma string conforme o parâmetro de casas.

let valor = 2.456;

console.log(valor.toFixed(2));

/* -------------------------------------------------------------*/

//toLocaleString( ) irá retornar uma string com uma representação da moeda definida como parametro currency. toLocaleString("pt-BR", { style: 'currency', currency: "BRL"});

console.log(valor.toLocaleString("pt-BR", { style: 'currency', currency: "BRL"}));