/* modelagem */
class Parafuso{
    constructor(){
        /* ao criar uma instancia da classe Parafuso é retornado um erro e a criação não é feita  */
        if(this.constructor === Parafuso)
             throw new Error ('Classe abstrata não pode ser instanciada'); //abstração
    }
    /* caso uma subclasse nao for definida o metodo tipo é retornado a mensagem de erro */
        get tipo(){
            throw new Error ('Método get tipo() precisa ser implementado'); //abstração
        } 
}

/* a subclasse Fenda herda os atributos e metodos da superclasse Parafuso */
class Fenda extends Parafuso{ //herança
    constructor(){
        //puxa atributos e metodos do pai nesse caso puxa a condição que verifica se constructo é igual a Parafuso
        super();
    }
    /* metodo tipo herdado da superclasse, retorna Fenda quando criado uma instancia de Fenda */
    get tipo(){
        return 'Fenda';
    }
}

class Philips extends Parafuso{ //herança
    constructor(){
        super();
    }

    get tipo(){
        return 'Philips';
    }
}

/* aqui a subclasse Allen herda a superclasse Parafuso */
class Allen extends Parafuso{
    /* porém nenhum método ou propriedade foi definido, poderá ser criado uma instancia com a classe Allen, porem quando for executado o tipo
    será retornado a mensagem de erro, pois o metodo tipo nao implementado */
}

/* const parafuso = new Parafuso(); */
const fenda = new Fenda();
const philips = new Philips();
const allen = new Allen();

console.log(fenda.tipo + " e " + philips.tipo);
/* console.log(allen.tipo); */