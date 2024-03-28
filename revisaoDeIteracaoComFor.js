let nomesVect = ['Gabriel', 'Limeira', 'John', 'Italo', 'Yvissomm'];
for(i = 0; i < nomesVect.length; i++){
    console.log(nomesVect[i]);
}
console.log();
//a iteração pode ser com o " for of " também, que é como se fosse
//uma espécie de forEach do java

for(let iterar of nomesVect){   //em java seria: for(int iterar : nomesVect)
    console.log(iterar);
}
console.log();

//eu posso usar o " for in " que faz a mesma coisa do 'for of', porém
//ele pega apenas os índices do vetor, não os dados
for(let iterar in nomesVect){
    console.log(iterar);
}