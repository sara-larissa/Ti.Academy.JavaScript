

// //concat( ) "junta" dois ou mais arrays 
//     let nomes = ["Sara", "Raphael", "Sofia", "Selma", "Leandro"];
//     let nomes2 = ["Nalu", "Branquinho", "Pretinho", "Gatinha", "Gi", "Passárinhos"];

//     let todosOsNomes = nomes.concat(nomes2);

//     console.log(nomes);
//     console.log(nomes2);
//     console.log(todosOsNomes);
//     let qtdArrayNome = ` o array nomes possui ${nomes2.length} elementos`;

//     console.log(qtdArrayNome);

// -------------------------------------------------------------

    //indexOf ( ) Procura um determinado elemento em um array, retorna uma posição

    // let nomes2 = ["Nalu", "Branquinho", "Pretinho", "Gatinha", "Gi", "Passárinhos"];

    // // console.log(nomes2.indexOf("Pretinho"));
    // let buscaNome = "Gi";

    // if( nomes2.indexOf(buscaNome) != (-1)){
    //     alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
    // } else {
    //     alert(`Não encontrei o ${buscaNome}`);
    // }


    // --------------------------------------------------------------

    //Join( ) transforma elementos de um array em uma string
    
    // let nomes2 = ["Nalu", "Branquinho", "Pretinho", "Gatinha", "Gi", "Passárinhos"];

    // console.log(nomes2);
    // console.log(nomes2.join());

// -----------------------------------------------------------------------

    //push( ) insere elementos no final de um array
    
    // let frutas = ["Uva", "Pera", "Abacaxi"];
    // // frutas.push("Maça", "Laranja");
    // // frutas.push("Laranja");
    // // console.log (frutas.indexOf("Jaca"));

    // let insertFruta = "Melancia";

    // if(frutas.indexOf(insertFruta) == -1){
    //     console.log(`A fruta ${insertFruta} não está na lista`)
    //     frutas.push(insertFruta);

    // } else {
    //     console.log(`A fruta ${insertFruta} já está na lista` )
    // }

    // console.log(frutas);

// -----------------------------------------------------------------------

    // pop( ) remove o ultimo elemento da lista 

    // let frutas = ["Uva", "Pera", "Abacaxi", "Nectarina"];

    // frutas.pop();

    // console.log(frutas);

// -----------------------------------------------------------------------


    //reverse( ) vai inverter a posção dos elementos de um array (de trás para frente)

    // let frutas = ["Uva", "Pera", "Abacaxi", "Nectarina"];

    // frutas.reverse();

    // console.log(frutas); // inverteu de trás para frente
    // console.log(frutas[2]); // vai dar em que posição a pera está

// -----------------------------------------------------------------------

    // shift( ) remove o primeiro elemento de um array

    // let frutas = ["Uva", "Pera", "Abacaxi", "Nectarina"];
    // frutas.shift();

    // console.log(frutas); // removeu a uva

// -----------------------------------------------------------------------

    //sort( ) Ordena elementos de um array em uma ordem crescente 

        // let numeros = ["200", "2", "4", "6", "31", "24"]; // não mt preciso com números, com letras sim
        // let alfa = ["n", "p", "c", "a", "z"];

        // alfa.sort();

        // console.log(alfa);

// -----------------------------------------------------------------------
 
    //toString( ) converte um array em uma string e retorna essa string

        // let frutas = ["Uva", "Pera", "Abacaxi", "Nectarina"];
        // console.log(frutas.toString ());

// -----------------------------------------------------------------------

    // unshift( ) Insere um elemento no início do array
        
    // let frutas = ["Uva", "Pera", "Abacaxi"];
    // frutas.unshift("Laranja"); //adc a Laranja no início
    // console.log (frutas); 

// -----------------------------------------------------------------------

    // aplice( ) corta ou remove um elemento de um array em um ponto indicado
    // Agrupar com indexOf

    // let nomes = [ "Justin Bieber", "Jonas Brothers", "The Wanted"];

    // let novosNomes = nomes.splice(0,2); //neste caso 0 é o Justin Bieber e 2 é o the wanted então seria removido esses 2 - mostrando os nomes que foram removidos

    // let novasLista = nomes.splice(0,1); //neste caso 0 é o Justin Bieber e 2 é o the wanted então seria removido esses 2 /  mostrando os nomes que ficaram 

    // console.log(nomes);

// -----------------------------------------------------------------------

    // Exercicio proposto na aula anterior

 /* 
 Nome:Sara
 Altura: 1.60
 Peso: 64
 IMC: 20.
 */

//  peso = prompt("")
    
 function valorImc(nome, altura, peso){

    altura = Number(altura);
    peso =  Number (peso);

    let imc = peso / (altura*2);

 console.log("Nome..: ", nome);  
 console.log("Altura..: ", altura); 
 console.log("Peso..: ", peso); 
 console.log("IMC..: ", imc); 
 }

 pesoPessoa = prompt ("Digite seu peso");
 alturaPessoa = prompt ("Digite sua altura");
 nomePessoa = prompt ("Digite seu nome");

 valorImc(nomePessoa, alturaPessoa, pesoPessoa);
