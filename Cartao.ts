import{MetodoDePagmento} from "/.MetodoDePagamento"

export class Cartao implements MetodoDePagmento{
    nome:string
    tipo:string
    valor:number

    pagar():number{
    console.log('Digite os numeros do seu cartao.')
    
       }
}