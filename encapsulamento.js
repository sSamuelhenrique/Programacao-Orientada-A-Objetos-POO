/* criaçao da classe poligono */
class Poligono{
    /* criação do objeto */
	constructor(altura, largura){
	this.altura = altura
	this.largura = largura
	
	}
		
    /* get area() pega a funcionalidade do metodo privado #calcularArea(), quando area é executado ele retorna o valor que o metodo privado calculou */
	get area(){
	return this.#calcularArea()
	}
	
/* quando o objeto é criado passando os argumentos essa função privada atraves da hash retorna o valor do calculo efetuado para essa classe (nao para o usuario),
entao quando area() é  executada o get é acionado que por sua vez chama esse metodo privado, para retornar o calculo da area  */
	#calcularArea(){
		return this.altura * this.largura
	}
}

const poligono = new Poligono(50, 50);
console.log(poligono);
console.log(poligono.area);