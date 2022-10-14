

let nomes = ["Sara", "Raphael", "Sofia", "Selma", "Leandro"];

const coisaNomes = (name, novoNome, index)=>{

    console.log("Quantidade de elementos em um array..: ", name.length);
    console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]}`);
    console.log(`O nome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("A quantidade de elementos atual do array é de..: ", name.length);

}

coisaNomes(nomes, "Nalu", 3);
coisaNomes(nomes, "Branquinho", 2);
