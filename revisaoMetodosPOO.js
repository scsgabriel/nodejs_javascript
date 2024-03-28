class Empregado{
    constructor(nome, idade, emprego, salario){
        this.nome = nome;
        this.idade = idade;
        this.emprego = emprego;
        this.salario = salario;    
    }

    //método fora do corpo do construtor, mas dentro do corpo da classe Empregado
    aumetoSalarial(){
        this.salario *= 1.1;
    }
}

let empregado1 = new Empregado("Joaquim", 50, 'Contador', 5000);
console.log(empregado1);

empregado1.aumetoSalarial();
console.log(empregado1);