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