/*
//AULA 04 - TYPESCRIPT

//STRING

let nome:string = 'Murilo'
let idade:number = 29
let souEstudante:boolean = false

console.log(`Meu nome é ${nome} e tenho ${idade} anos. Sou estudante? ${souEstudante}.`)

//Criem uma funçao que pede nome, idade e se tem carteria de motorista 

//-- npx tsc index.ts 
//-- node index.js

//readline-sync

import * as readline from 'readline-sync'

let nome: string = readlineSync.question('Qaul é seu nome?')
let idade: number = Number(readlinesync.question('Qual a suas idade?'))
let temCarteira: string  = readlineSync.question('Voce possui carteira de motorista para dirigir?(Sim/Nao)')



function podeDirigir (myname: string, myIdade: number, myCarteira: boolean):void{
        
    if (idade >= 18 && temCarteira === 'Sim') {
            console.log('Vode pode dirigir')
        }else{
            console.log('Voce nao pode dirigir')
        }
        
        console.log(`Meu nome é ${nome}, tenho ${idade} e tenho carteria? ${temCarteira}.`)
}

podeDirigir(nome,idade, temCarteira)



// PASSO 1 - INSTALAR O TYPESCRIPT
// NPM INSTALL -G TYPESCRIPT ou NPM INSTALL TYPESCRIPT

// PASSO 2 - TRANSPILAR PARA JS
// NPX TSC NOMEARQUIVO.TS

// PASSO 3 - RODAR O ARQUIVO JS
// NODE NOMEARQUIVO.JS


-----------//AULA 05 - ARRAY E OBJETOS

//ARRAY

let array1: Array<number> = [1,2,3]

let array2: number[] = [1,2,3]

//OBJETO

let person: {name:string, age: number} =
{
    name:'Mr',
    age: 20
}


function soma(num1:number, num2:number): number{
    return num1 + num2
}

function frase (nome:string):string{
    return `Ola ${nome}, TUDO BEM?`
}

function chamaAlgo(nome:string):void{
    console.log(`E ai ${nome}!`)
}

function sayHello(name?:string):void{ //parametro opcional -- interrogaçao(?)
    console.log('Hello', name || 'World')

}

function desconto(preco:number, desconto:number = 0.05):number{
    return preco * (1-desconto)
}

console.log(desconto(5))


function frase (nome:string = 'joao', idade:number = 40):void{
    console.log(`Ola ${nome}, voce tem ${idade} anos de idade.`)
}

frase('Mr', 20)

// classe -> Molde(parametros) passo 1
// objeto -> Espada(criaçao) passo 2

//-----------------------------------------------------------------------//

//Objeto 
//classe DOG -- Criando um "molde" para a classe do tipo dog
class Dog {//MOLDE
    
    nome:string
    peso:number
    pelagem:string
    raca:string


    constructor(dogNome: string, dogPeso: number, dogPelagem: string) {
        
        this.nome = dogNome
        this.peso = dogPeso
        this.pelagem = dogPelagem
        this.raca = 'Golden'
    }

    latir():void{
        console.log(`${this.nome} esta latindo.`)        
    }
    correr():void{
        console.log('O dog esta correndo.')
    }
    comer():void{
        console.log('O dog esta comendo.')
    }
    dormir():void{
        console.log('O dog esta dormindo.')
    }

}

//Instanciando meus OBJETOS
const meuDog:Dog = new Dog('Max', 10,'colorido')
const meuDog2:Dog = new Dog('Mike', 12,'azul')

//Chamar um ATRIBUTO
console.log(meuDog.nome)//Max
console.log(meuDog2.nome)//Mike

//Chamar um METODO 
meuDog.latir()//Max
meuDog2.latir()//Mike


//Criar uma classe coruja
//3 atributos
//3 metodos
//Usar o CONSTRUCTOR
//Instanciar dois objetos coruja e chame os metodos

*/
class Owl{ //Molde
    name: string
    weight: number
    coat: string
    breed:string

    constructor(owlName:string, owlWeight:number, owlCoat:string){
           this.name = owlName
           this.weight = owlWeight
           this.coat = owlCoat
           this.breed = 'Devil'

    }

    sound():void{
        console.log(`${this.name} UUH, UUH`)
    }
    fly():void{
        console.log(`${this.name} The flapping of an Owl's wings`)
    }
    eat():void{
        console.log(`${this.name} has eaten`)

    }
    hunt():void{
        console.log(`${this.name} has hunting`)
    }


}

//Instanciando meus OBJETOS
const myOwl:Owl = new Owl('Dora', 3,'Branca')
const myOwl2:Owl = new Owl('Samy', 5,'Diabo')

//Chamar um ATRIBUTO
console.log(myOwl.name)//Dora
console.log(myOwl2.name)//Samy

//Chamar um METODO

//M1
myOwl.sound()//Dora
myOwl2.sound()//Samy
/*
//M2
myCoruja.fly()//Dora
myCoruja2.fly()//Samy

//M3
myCoruja.eat()//Dora
myCoruja2.eat()//Samy

//M4
myCoruja.hunt()//Dora
myCoruja2.hunt()//Samy
*/

//Construir duas classes, ambas podem atacar e sofrer dano: 

//Guerreiro - 100 de vida
//nome
//tipo
//forca
//saude

//Monstro- 50 de forca e 10 de vida:
//nome
//forca
//saude

//-------------AULA 06 //--(import {Guerreiro} from './Gurreiro')--
/*
class Guerreiro{//MOLDE
    nome:string
    tipo:string
    forca:number
    saude:number

    constructor(guerreiroNome:string, guerreiroTipo:string, guerreiroForca:number){
        this.nome = guerreiroNome
        this.tipo = guerreiroTipo
        this.forca = guerreiroForca
        this.saude = 100  
    }
    atacarM(monstro:Monstro):void{
        console.log(`O ${this.nome} ataca o monstro ${this.nome}`)
        
            
    }

    receberDano(dano:number):void{
        this.saude = dano
    }
    
    defender():void{
        console.log(`O ${this.nome} defende o ataque do monstro `)
    }
}

class Monstro{//MOLDE
    nome:string
    forca: 50
    saude: 10

    constructor(monstroNome:string, monstroForca: 50, monstroSaude: 10){
        this.nome = monstroNome
        this.forca = 50
        this.saude = 10    
    }

    atacarG(guerreiro: Guerreiro):void{
        console.log(`O ${this.nome} ataca o ${guerreiro.nome}`)

    }


}


//CONSTRUIR CLASSE: CARRO(115cv ford focus) E MOTO(1000cc)

class Carro{
    nome:string
    modelo:void
    motor:115
    cor: 'Vinho'

    constructor(carroNome:string, carroModelo:void, carroMotor:115){
        this.nome = carroNome
        this.modelo = carroModelo
        this.motor = carroMotor
    }

    car(carro: Carro):void{
        console.log(`O ${this.nome} do modelo ${this.modelo} de motor ${this.motor} esta correndo a uma velocidade de`)

    }
}

class Moto{
    nome:string
    modelo:void
    motor:1000
    cor: 'Azul'

    constructor(motoNome:string, motoModelo:void, motoMotor:1000){
        this.nome = motoNome
        this.modelo = motoModelo
        this.motor = 1000
    }

    mot(moto: Moto):void{
        console.log(`O ${this.nome} do modelo ${this.modelo} de motor ${this.motor} esta correndo a uma velocidade de`)

    }
}
*/
























