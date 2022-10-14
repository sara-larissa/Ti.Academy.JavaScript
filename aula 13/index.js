
// let i=2; //var global
// for(let x = 0; x <=10; x++ ) {
//     console.log(`O valor da interação é ${x} o X + ele mesmo ${i++}`);
// }

// let pessoas = {
//     nome :"Steven Rogers",
//     idade :112 ,
//     heroi :"Capitão América",
// }

// for(let propriedades in pessoas) {
//     console.log(pessoas.nome);
//     console.log(pessoas.idade);
//     console.log(pessoas.heroi);
// }

// // console.log(pessoas.nome);


// let frutas = ["Melancia", "Manga", "Banana", "Uva","Tomate" ];
// for(let nomeFruta of frutas) {
//     console.log(nomeFruta);
// }

// for(let x = 0; x < frutas.length; x++ ) {
//     console.log(`O nome da fruta é ${frutas[x]} `);
// }    

let Herois = [
{
    identidadeSecreta :"Steven Rogers",
    heroi :"Capitão América",
},

{
    identidadeSecreta :"Tony Stark",
    heroi :"Homem de ferro",
},

{
    identidadeSecreta :"Peter Parker",
    heroi :"Homem aranha",
}

]

// let marvel = Herois[1]. identidadeSecreta;
// console.log(marvel);

Herois.push({identidadeSecreta:"Diana", heroi:"Mulher maravilha"});

for(let marvel of Herois) {
    for(let m in marvel) {
        // console.log(marvel[m])
        console.log(`${m} -> ${marvel[m]}`);
    }
}

