import{Produto} from "/.Produto"

export class Livro implements Produto{
   nome:string
   tipo:'Livro'
   valor:number
   
   constructor(nome:string, tipo:'Livro', valor:number){
           this.nome = nome
           this.tipo = 'Livro'
           this.valor = number
    }

    calculaValorTotal(){
         console.log(`O ${this.nome}`)
    }
}