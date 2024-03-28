// o splice deleta os elementos que eu quiser, de duas formas:
// 1 --> acessando o índice do vetor 
// 2 --> informando quantos elemenetos devem ser excluídos a partir desse índice

let vect = ['Gabriel', 'John', "Rebeca", "Limeira"];
console.log(vect);
vect.splice(0, 1); //A partir do índice zero eu vou excluir 1 item, logo: exclui 'Gabriel'
console.log(vect);
//E se eu quiser excluir 'Rebeca' e 'Limeira'?
// A partir do índice 1 (Rebeca) excluímos 2 elementos (Rebeca e Limeira);
vect.splice(1, 2);
console.log(vect);

//Usando splice também da pra adicionar um elemento, ao invés de excluir
//desde que esse elemento seja informado depois do índice e da quantidade

// o índice diz a partir de que posição os dados serão inseridos
//e a quantidade tá zerada porque não quero substituir, nem excluir, apenas adicionar
vect.splice(1, 0, 'Gabriel', 'Pedrinho');
console.log(vect);

//Mas e se eu quiser substituir?
//Posso dizer que a partir do índice eu quero substituir uma quantidade x de elementos
//Por outros

vect.splice(1, 1, "Nathalia");
console.log(vect);
/* A partir do índice 1 eu removi apenas 1 elemento e substituí por "Nah"  */
