//Classe Principal - Animal
class Animal{
    name:string //Nome
    weight:number //Peso
    
    //Caracteristicas
    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight

    }
    //Funções do Animal
    eat(quantity:number){//Comer
        console.log('The animal has eaten' + quantity)
    
    }
    sleep(hours: number){//Dormir
        console.log('The animal went to sleep' + hours)
    }

}
