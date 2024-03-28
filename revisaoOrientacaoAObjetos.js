//classes e construtores

class Pessoa{
    constructor(umNome, idadeDaPessoa){
        this.nome = umNome
        this.idade = idadeDaPessoa;
    }
}

let pessoa1 = new Pessoa("Gabriel", 26); 
console.log(pessoa1);

let pessoa2 = new Pessoa("Annanda", 15);
console.log(pessoa2);

console.log('\nCriando classe Aluno: ');

class Aluno{
    constructor(nome, disciplina, nota){
        this.nome = nome;
        this.disciplina = disciplina;
        this.nota = nota;
    }
}

let aluno = new Aluno('Gabriel', 'Gramática', 10);
console.log(aluno);