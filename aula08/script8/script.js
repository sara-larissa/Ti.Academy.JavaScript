let str = `Qualquer conteúdo!`;

let str2 = `Uma outra string ${str}`;
console.log(str2);

// let str = "Qualquer conteúdo";
// let str2 = "Uma outra string. " + str;

// console.log(str2);
// ___________________________

//Arrays uma coleção de dados 
//Array é constituido por elementos, no caso abaixo o arrey está constituido por 4 elemnetos então podemos dizer que o tamanho do meu array é 4, lembrando que sempre começa na posição 0;

// const frutas = ["Uva", "Banana", "Nectarina", "Melancia"];
// let euGosto = `Eu gosto de ${frutas[2]}`;

// // console.log(euGosto);

// console.log(frutas[0]); //uva
// console.log(frutas[1]); //banana
// console.log(frutas[2]); //nectarina
// console.log(frutas[3]);

const pessoa = [
    "Sara", //0
    24,     //1
    "noiva", //2
    "ouvir música", //3
    1.60,  //4
    cores = ["rosa", "preto", "salmão", "Bege", "lilas"]
];

let key = 3;

key++; //4

// console.log(pessoa.length) //pessoa array
console.log("Sara".length) // length reconhece a string como array

console.log(pessoa[5][key]); // 5 é a colocação das cores que está no 5° lugar no array, e o 2 é a colocação da cor salmão que está na 3 posição dentro do array cores (ARRAY BIIMENSIONAL)

// const sara = `Olá! Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos e sou ${pessoa[2]}, eu também gosto de ${pessoa[3]}. Minha altura é de ${pessoa[4]}`;

// console.log(sara);


(function(p){
    const sara = `Olá! Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos e sou ${pessoa[2]}, nas horas vagas gosto de ${pessoa[3]}. Minha altura é de ${pessoa[4]}`;
    // alert(sara); // alert escreve naquela mensagem que aparece para dar OK
    document.write(sara); // document escreve na página web
})(pessoa)

