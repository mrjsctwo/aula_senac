import { Alimento } from "./Alimento"
import { Eletronicos } from "./Eletronicos"
import { Livro } from "./Livro"
 
const listaDeCompras: number = ['1.Eletronicos','2.Alimento','3.Livro','4.Sair']

console.log('MENU')
console.log('1.Eletronico')
console.log('2.Alimento')
console.log('3.Livro')
console.log('4.Sair')


switch (listaDeCompras) {
    case 1:
        Eletronicos
    case 2:
        Alimento
    case 3:
        Livro
    case 4:
        Sair
        break;

    default:
        console.log('Opcao nao encontrada!')
        break;
}
