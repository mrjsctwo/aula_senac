//Classe Principal - Animal
class Animal{
    name:string //Nome
    weight:number //Peso
    
    //Caracteristicas
    constructor(name:string, weight:number){//Funcao Constructor
        this.name = name
        this.weight = weight

    }
    //Comportamento
    eat(quantity:number){//Comer
        console.log('The animal has eaten' + quantity)
    
    }
    sleep(hours: number){//Dormir
        console.log('The animal went to sleep' + hours)
    }

}
