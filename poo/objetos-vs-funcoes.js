// criando objeto atraves de factory functions

const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1("Tiago", "Euzebio");
console.log(p1.andar());
//console.log(typeof(p1));

// objetos por funcoes construtoras
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function() {
        console.log(`${nome} ${sobrenome} está andando...`);
    }
}

const x = new Pessoa2("Pedro", "Alcantara");

x.andar();

// podemos por classe tbm