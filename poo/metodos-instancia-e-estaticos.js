class Veiculo{
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    imprimirDados() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca,modelo);
        this._cilindradas = cilindradas;

    }

    get cilindradas() {
        return this._cilindradas;
    }

    set cilindradas(cilindradas) {
        this._cilindradas = cilindradas;
    }

    imprimirDados() {
        super.imprimirDados();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }

}

//const moto1 = new Moto("Honda", "Bros", 160);
//moto1.imprimirDados();

// Vamos falar sobre metodos estáticos: Supondo que minha oficina so fabrique carros da marca Toyota;

class Carro extends Veiculo {
    constructor(modelo, motor) {
        super(Carro.retornarMarca(), modelo);
        this.motor = motor;
      }

    get motor() {
        return this._motor;
    }

    set motor(motor) {
        this._motor = motor;
    }

    imprimirDados() {
        super.imprimirDados();
        console.log(`Motor: ${this.motor}`);
    }

    static retornarMarca() {
        return "Toyota";
    }

}

const carro1 = new Carro("Corolla", "2.0");
carro1.imprimirDados();



