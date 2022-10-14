// function Pessoa(nome){

//     this.nome = nome;

//     // this.msg = function(){
//     //     alert("Olá!");
//     // }

// }

// Pessoa.prototype.msg = function(){
//     alert("Olá!" + this.nome);
// }

// let NovaPessoa = new Pessoa (" Sara");
// let OutraPessoa = new Pessoa(" Rapha");

// console.log(NovaPessoa.nome);

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);


// ***********************************************

// let Pessoa2 = {
//     nome: '',
//     'idade': ''
// }

// // console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá!" + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = " Sara";
// P.msg();
// console.log(P);



// ***********************************************

let Pessoa3 = [
    {
        "nome": "Sara", //0
        "idade" : 24,
        "sexo": "F"
    },

    {
        "nome": "Raphael", //1
        "idade" : 31,
        "sexo": "M"
    },
]

let NPessoa = Pessoa3;
console.log(`Existem ${NPessoa.length} cadastradas`);
console.log(NPessoa[0].nome);