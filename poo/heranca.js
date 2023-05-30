// Aula de herança - aula 62 - aplicação fintech

/*

Funcionários, Cliente

Funcionario:
nome
sobrenome
email
cpf
funcao
registro


cliente:
nome
sobrenome
email
cpf
renda

funcao:
descricao
salario

*/

class Funcao { // OK
    constructor(descricao, salario) {
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }

}

class Pessoa { // OK
    constructor(nome, sobrenome, email, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nomeCompleto() {
        return this._nome + " " + this._sobrenome;
    }

    imprimirDados() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }

}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao() {
        return this._funcao;
    }

    set funcao(funcao) {
        this._funcao = funcao;
    }

    get registro() {
       return this._registro;
    }

    set registro(registro) {
        this._registro = registro;
    }

    //Sobrescrita de metodo
    imprimirDados() {
        super.imprimirDados;
        console.log(`Função: ${this.funcao.descricao}, Salario: ${this.funcao.salario}, Registro: ${this.registro}`);
    }
}

class Cliente extends Pessoa {
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome,sobrenome,email,cpf);
        this._renda = renda;
    }

    get renda() {
        return this._renda;
    }

    set renda(renda) {
        this._renda = renda;
    }


    imprimirDados() {
        super.imprimirDados;
        console.log("Renda: " + this.renda);
    }

}


const c1 = new Cliente("Bruce", "Wayne", "thebatman@mail.com", "123.123.123-12", 9123.22);
//console.log(c1);


const c2 = new Cliente("Tanjiro", "Kamado", "tanjiro@mail.com", "981.123-978-21", 6521.23);

const programador = new Funcao("Programador", 5987.44);

const f1 = new Funcionario("Bob", "Grey", "bob@mail.com", "071.790.12-42", programador, "0124fa09");

f1.imprimirDados();
console.log(`cliente 1 nome: ${c1.nome}`);
c1.imprimirDados();

// polimofirsmo: comportamento diferente de metodos para determinados objetos
