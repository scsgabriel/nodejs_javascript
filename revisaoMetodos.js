// Métodos em js pra trabalhar com vetores
// Métodos --> POP, PUSH, Shift e UnShift 

// pop exclui o último elemento do vetor
let vect = ["Fazenda", "Campo", "Céu"];
console.log(vect);
vect.pop(); //excluiu "Céu"
console.log(vect);
vect.pop(); //excluiu "Campo"
console.log(vect);

// PUSH adiciona um elemeneto na última posição do vetor
vect.push("Plantação");
console.log(vect); //adicionou "Plantação" no vetor 

// Shift exclui o primeiro elemento de um vetor
vect.shift()
console.log(vect)

//UnShift adiciona um elemento na primeira posição do vetor
vect.unshift("Chácara");
console.log(vect);

//criando function que adiciona elementos na última casa do vetor

let times = ["São Paulo", "PSG"];

function add(x){
    times.push(x); 
}

add("Man. City");
add("Real Madrid");
console.log(times);
