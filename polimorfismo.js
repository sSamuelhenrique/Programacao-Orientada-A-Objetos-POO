class Atleta{
    peso;
    categoria;

    constructor(peso){
        this.peso = peso;
    }
    
    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = 'infantil';
        }
        else if(this.peso <= 65){
            this.categoria = "juvenil";
        }
        else{
            this.categoria = 'adulto';
        }
    }

}
/* subclasse Lutador herda as propriedade ou funções da superclasse Atleta */
class Lutador extends Atleta{ //herança
    /* ao criar uma instacia de Lutador, o super faz com a instacia receba as propriedades e metodos de Atleta */
    constructor(peso){
        /* this.peso = peso */
        super(peso);
    }

    /*  devido a herança da superclasse, houver um polimorfismo onde o metodo definirCategoria foi alterado para que atendesse aos objetivos
    da subclasse Lutador*/
    definirCategoria(){ //polimorfismo
        if(this.peso <= 54){
            this.categoria = 'pluma';
        }else if(this.peso <= 60){
            this.categoria = 'leve';
        }else if(this.peso <= 75){
            this.categoria = 'meio-leve';
        }else{
            this.categoria = 'pesado';
        }
    }
}


const atleta = new Atleta(50);
atleta.definirCategoria();
console.log(atleta);

const lutador = new Lutador(100);
lutador.definirCategoria();
console.log(lutador);
