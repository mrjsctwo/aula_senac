import{Produto} from "/.Produto"

export class Eletronicos implements Produto{
   nome:string
   tipo:'Eletronicos'
   valor:number
   
   constructor(nome:string, tipo:'Eletronicos', valor:number){
           this.nome = nome
           this.tipo = 'Eletronicos'
           this.valor = number
    }

    calculaValorTotal(){
         console.log(`O ${this.nome}`)
    }
}