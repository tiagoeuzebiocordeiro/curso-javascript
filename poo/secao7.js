class Pessoa {
    constructor(id, nome, idade) {
        this._id = id;
        this._nome = nome;
        this._idade = idade;
    }

    falar(msg) {
        console.log(`${this.nome}: ${msg}`);
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        this._idade = idade;
    }

}

class Carro {
    constructor(id, modelo, marca) {
        this._id = id;
        this._modelo = modelo;
        this._marca = marca;
    }

    informacoes() {
        console.log(`INFORMAÇÕES: ${this.id} | ${this.modelo} | ${this.marca}`);
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

}

class Produto {
    constructor(id, preco, nome, quantidade) {
        this._id = id;
        this._preco = preco;
        this._nome = nome;
        this._quantidade = quantidade;
    }

    precoTotal() {
        console.log(`Preço total = R$ ${this.preco} * ${this.quantidade}`);
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get preco() {
        return this.preco;
    }

    set preco(preco) {
        this._preco = preco;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get quantidade() {
        return this._quantidade;
    }

    set quantidade(quantidade) {
        this._quantidade = quantidade;
    } 

}

// Instaciação de objetos - forma 1

const curso = new Object();
curso.nome = "Programação";
curso.preco = 35.99;

console.log(curso);

curso['qtdAluno'] = 999;

console.log(curso);

delete curso['qtdAluno'];

console.log(curso);

// Instaciação de objetos - Literal - Forma 2

const videogame = {
    nome: "Valorant",
    gratuito: true,
    desenvolvedor: "Riot Games",
    plataformas: "PC",
    anoLancamento: 2020,
    requisitos: {
        gpu_minima: "GTX 750Ti",
        cpu_minima: "i3 3100",
        memoria_minima: "8gb",
        armazenamento: "50gb",
    }
}

console.log(videogame);
console.log(videogame.nome + " - " + videogame.requisitos.gpu_minima);