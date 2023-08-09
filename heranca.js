/* modelagem */
/* criação da superclasse Veiculo, que contem a propriedade rodas e dois metodos */
class Veiculo{
	rodas = 4;

	mover(direcao){
        console.log(`Movendo-se para ${direcao}`);
    }
	virar(direcao){ 
    }
}

/* a subclasse Moto herda da superclasse Veiculo suas propriedade e funcoes */
class Moto extends Veiculo{//herança
	constructor(){
	super(); //puxa atributos e metodos do pai - ao executar o super(), moto recebe a propriedade rodas com valor 2 e as funções mover e virar
	this.rodas = 2;
}
}
const moto = new Moto();
 console.log(moto);
moto.mover('esquerda')