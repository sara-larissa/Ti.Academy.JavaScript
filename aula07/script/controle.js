
// Exercicio 08

function verificarMaiorNum(num1, num2){

    //if e operadores
    if(num1 > num2){
        console.log("O número "+num1+" é maior de o número " + num2);
    } else {
        console.log("O número "+num1+" é menor de o número " + num2);
    }

}

// verificarMaiorNum(1,3);

// alert("Estou funcionando");

function teste(){
    let nome = "Sara";
    return nome;
}

teste();

// console.log(teste());


// let msg = (nome) => { return nome; }
// console.log( msg("Sara"));

// (function(produto,preco){
//     alert("O produto é "+produto+ " e o preço é de R$ "+preco);
// })("Biscoito", 2.35)

let valor1 = prompt("Digite o valor 1");
let valor2 = prompt("Digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = parseInt (valor1) + parseInt(valor2);
    console.log(resultado);
}

//parseInt faz o JS entender o valor da soma, exemplo: se valor1 for 2 e valor2 for 4, sem o parseInt  ficaria 24, com o uso do parseInt ficará 6.

soma(valor1, valor2);
