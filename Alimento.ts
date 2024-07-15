import{Produto} from "/.Produto"

export class Alimento implements Produto{
   nome:string
   tipo:'Alimento'
   valor:number
   
   constructor(nome:string, tipo:'Alimento', valor:number){
           this.nome = nome
           this.tipo = 'Alimento'
           this.valor = number
    }

    calculaValorTotal(){
         console.log(`O ${this.nome}`)
    }
}