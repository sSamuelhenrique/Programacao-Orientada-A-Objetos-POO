class Pessoa{
    constructor(nome){
        this.nome = nome;
        
        return console.log(`Olá me chamo ${nome}`);
    }
}

const pessoa = new Pessoa("Samuel");