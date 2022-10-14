
//incremento

let n = 1;

n++; //2
n++; //3


let frutas = ['Melancia', 'Banana', 'Uva', 'Pitaya'];
frutas.push("Jabuticada", "Maça");

// console.log(frutas[n]); //Pitaya

// for(let i=0; i <= frutas.length; i++){
//     console.log(frutas[i]); //na primeira volta vale 1 =melancia , segunda vale 2 = banana
// }

// for(let i=10; i > 0; i--) // vai começar do n°, na opção abaixo vai começar da ultima fruta para a primeira
 for(let i=frutas.length; i >= 0; i--) {
    console.log(frutas[i]);
};