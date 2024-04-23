/*
let numbers = [1,2,3,4,5,6]
console.log(numbers.length)
numbers.push(7)
numbers.splice(3,2)


let comidaPreferida = ["Pizza","Arroz","Sushi","Feijao"]
console.log(comidaPreferida[0] + "\n" + comidaPreferida[1]+ "\n" + comidaPreferida[2] + "\n + comidaPreferida[3]))



let nomeDoUsuario = prompt("Digite seu nome:")

let emailDoUsuario = prompt("Digite seu E-mail:")

alert(`Meu nome é ${nomeDoUsuario} e meu e-mail é ${emailDoUsuario}`)


let option = prompt("Dgite uma opcao p/ cafe:","1-Expresso  2- Capuccino, 3- Frapuccino")

if (option ===1) {//condicao 1
    alert("Preparando cafe Expresso!")//acao 1
}//prepara cafe(option1)

if (option ===2) {//condicao 2
    alert("Preparando cafe Capuccino!")//acao 2
}//prepara cafe(option2)

if (option ===3) {//condicao 3
    alert("Preparando cafe Frapuccino!")//acao 3
}//prepara cafe(option3)

End


Inicio do codigo
         |
      Etapa 1
         |
      Etapa 2
         |
         *
  --  [ 7 ] --
  |           |
Possb 1     Possb 2
  |           |
endcode      endcode


if (condition) {
    alert("")
} else {
    alert("")
}
switch(maquinaDeCafe)
    case'option 1:
      console.log('Capuccino')
      break
    case'option 2:
      console.log('Expresso')
      break
    case    
*/    


//EXERCICIO 1

//DECLARA AS VARIAVEIS E INSERE VALORES DO USUARIO:
/*let num1 = prompt("Digite um numero:")
let num2 = prompt("Digite uma numero:")


//PROCESSA OS DADOS
if (num1 === num2) {
    alert("GEMEOS,PARABENS!")
}else{
    alert("NAO SAO IGUAIS,QUE AZAR)
}   


//EXERCICIO 2

//DECLARA AS VARIAVEIS E INSERE VALORES DO USUARIO:
/*let num1 = prompt("Digite um numero:")
let num2 = prompt("Digite uma numero:")


//PROCESSA OS DADOS
if (num1 === num2) {
    alert("GEMEOS,PARABENS!")
}else{
    alert("SAO DIFERENTES,QUE AZAR)
}    

*/

//EXERCICIO 3

//DECLARA AS VARIAVEIS E INSERE VALORES DO USUARIO:
/*let num1 = prompt("Digite o primeiro numero:")
let num2 = prompt("Digite o segundo numero:")


//PROCESSA OS DADOS
if (num1 > num2) {
    alert("Numero Maior!")
}else if(num1 < num2){
    alert('Numero Menor!')
}else if(num1 === num2){
     alert('Numeros iguais!')
}
*/


//EXERCICIO 4

/*pokemon = prompt("Digite o seu Pokemon:")
switch(pokemon){
    case'Bulbassauro':
      alert("Planta e veneno")
      break
    case'Charmander':
      alert("Fogo")
      break
    case'Squirtle':
      alert("Agua")
      break
    default:
      alert("Pokemon nao encontrado")
      break
}
*/

//EXERCICIO 5

/*let Medio = prompt("Concluiu o Ens.Medio?")
let idade = prompt("É maior de idade?")
let faculdade = prompt("Esta fazendo outra faculdade?")

if ((ensinoMedio == "Sim" ) && (idade == "Sim") && (faculdade == "Nao")){
    alert("Entao Voce pode estudar!")
}else{
    alert("Entao Voce nao pode estudar!")
}
*/

/*let array
console.log('a. ', array) // array nao definido

array = null
console.log('b. ', array) // ausencia de um valor/objeto

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // a quantidade ou o tamanho do array
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])// i = 0 (posicao 0 = numero 3)

array[i+1] = 19
console.log('e. ', array) // i + 1 = 3+1=4(as posicoes invertem por causa do numero 4, assim passa a ser 19) (troca de posicao 0 para 1 = isso é igual ao numero 19)

const valor = array[i+6] // soma de i(3) + 6 = 9
console.log('f. ', valor)