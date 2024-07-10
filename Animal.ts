class Animal{
    name:string
    weight:number

    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight

    }

    eat(quantity:number){
        console.log('The animal has eaten' + quantity)
    
    }
    sleep(hours: number){
        console.log('The animal went to sleep' + hours)
    }

}