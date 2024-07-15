import{MetodoDePagmento} from "/.MetodoDePagamento"

export class Pix implements MetodoDePagmento{
    nome:string
    tipo:string
    valor:number


    pagar():number{
           console.log('Desconto de 5% com Pix.')
    }


}
    