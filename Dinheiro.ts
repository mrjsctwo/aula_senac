import{MetodoDePagmento} from "/.MetodoDePagamento"

export class Dinheiro implements MetodoDePagmento{
    nome:string
    tipo:string
    valor:number

    pagar():number{
    console.log('Pagamento por boleto bancario')
    
       }
}