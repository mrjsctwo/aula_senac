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
*/


//EXERCICIOS 1
//DECALRAÇAO DE VARIAVEIS:
/*let maiorIdade = []
//INSERE OS VALORES DO USUARIO:
let idade = Number(prompt("Digite a sua idade:"))

maiorIdade.push(idade)

//PROCESSA DADOS:
if (maiorIdade ==='18') {
    alert('Vode pode dirigir!')
}else if (maiorIdade >= '18') {
    alert('Vode pode dirigir!')
}else if (maiorIdade <= '18') {
    alert('Vode nao pode dirigir!')
}
*/

//EXERCICIO 2



//EXERCICIO 5

//DECLARAÇAO DE VARIAVEIS/ //INSERE OS VALORES DO USUARIO:
/*let genFilme = prompt("Qual o genero do filme?")
let valorFilme = promp("Digite o preço do filme:")

genFilme = genFilme.toUpperCase()
//PROCESSA DADOS:
if ((genFilme == "FANTASIA") && (valorFilme <15)){
    alert('Bom filme!')
}else{
    alert('Escolha outro filme!')
}
----------------------------------------------------
----------------------------------------------------
*/

// WHILE (ENUQUANTO A CONDIÇAO FOR VERDADEIRO O LAÇO CONTINUARA/ SE FOR FALSO FECHARA.)
// EXEEMPLO 1: IMPRIMINDO ALGUNS NUMEROS
/*let i = 0//----------------COMEÇO

while (i<10) { //----------CONDIÇAO DE CONTINUAÇAO
    console.log(i) //------AÇAO DE REPETIÇAO
    i++ //-----------------INCREMENTAÇAO
}
*/
//SO PODEMOS COLOCAR VALORES VERDADEIROS
//TODOS OS VALORS SAO TRUE(VERDADEIRO)//Exceto:
// FALSE,0,-0,"",null,undefined e NaN

// EXEMPLO 2: "VOU COMER ATE 100 COXINHAS"
/*let estmomago = 0;

while (estmomago <100) {// ----- 0 < 100 = FALSE
                           ----- 101 < 100 = TRUE
    console.log("Quero comer mais coxinhas")
    estmomago = estmomago + 10;
}
*/

//---------------------------------------------------------

//EXERCICIO WHILE:
//DECLARA AS VARIAVEIS:
/*let i = 0
let soma = 0

//INICIALIZA i
i = Number(prompt("Digite um numero para ser somado:(Para sair digite 0 !!!"))
//INICIALIZA LOOP
while (i != 0) {
    //SOMA DOS VALORES
    soma = soma + i
    //LE OS VALORES PARA SOMAR
    i = Number(prompt("Digite um numero para ser somado: (Para sair digite 0 !!!)"))
}

//MOSTRA O RESILTADO NA TELA APÓS SAIR O LOOP
alert(soma)
*/


//----------------------------------------

//--------FOR------------


/*const numeros = [11, 15, 18, 14, 13]

for(let i = 0; i < 5; i++){
    const elemento = numeros[i]
    console.log(elemento)

}
*/

/*let array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0


for(let i = 0; i < 6; i++) {
        if(array[i] > maiorValor){ 
           maiorNumero = array[i]
        }
}
alert(maiorValor)//18
*/

//FOR OF:

//EXERCICIO 1:


/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

//EXERCICIO 2:
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let indices of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/

/*const array = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (const [index, value] of array.entries()) {
  console.log(`I: ${index} - V: ${value}`)
}
*/
//linha----I = 0(posicao)  V = valor que ha na posicao


//EXERCICIO 3:
/*const quantTotalLinhas = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
let V
while(quantidadeAtual < quantTotalLinhas){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

if (V === V){
  alert("Boa tarde!")
}
------------------------
/let petQuantidade = Number(prompt('Digite o numero de Pets:'))//Number

if( petQuantidade === 0){
    alert('voce pode adotar um PET!')
}else{
  let i = 0 
  let P 
  for(i = 0; i < petQuantidade; i++){
  let Pnome = prompt('Digite o nome do seu ${i+1} pet:')
  P.push(Pnome)

  }

}
*/
   //v =quantidade //
  //imprime a quantidade
  
  //v =nomes   // ----guardar em um array[]
  //imprime com o array



//DECLARA VARIVAEIS 

//1.ARRAY ORIGINAL
/*let array = [1,4,5,7,89,9]
let valor

//IMPRIME ARRAY ORIGINAL
alert(array)

//COMPUTA ARRAY ORIGINAL
for(valor of array){
    alert(valor)
}
//2.COMPUTA ARRAY ORIGINAL DIVIDIDO POR 10
for(valor of array){
    alert(valor % 10)

}

//3.NUMEOS PARES
//DECLARA VARIAVEL
let numerosP = []
//COMPUTA ARRAY PARES 
for(valor of array ){
   if(valor % 2 === 0){
  numerosP.push(valor)
   }
}
//4.NUMEROS PARES DO ARRAY ORIGINAL
// DECLARA VARIAVEIS
let arrayString = []

//COMPUTA ARRAY STRINGS
for (){

}

*/





//BLOCO 0 --- SISTEMA DE CADASTRO --- MENU PRINCIPAL
/*function sitemaDeCadastro(){
  let mensagem = ''
  mensagem += '====== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ======\n\n'
  mensagem += '1. CADASTRAR DOAODR \n'
  mensagem += '2. LISTAR DOADORES \n'
  mensagem += '3. BUSCAR DOADOR POR TIPO SANGUINEO \n'
  mensagem += '4. BUSCAR DOADOR POR DATA DA ULTIMA DOAÇAO \n'
  mensagem += '5. SAIR \n'
  mensagem += '\n ESCOLHA UMA OPÇÃO:\n'
  let opcao = Number(prompt(mensagem))
  return opcao
}
sitemaDeCadastro()*/

//BLOCO 1 CADASTRAR DOADOR
function CadastrarDoador(){
  let nome = prompt('Digite o seu nome:')
  let idade = prompt('Digite a sua idade:')
  let peso = prompt('Digite o seu peso:')
  let sangue = prompt('Digite o tipo sanguineo:')
  
  
/*BLOCO 2 LISTAR DOADOAR
function listarDoadores(){
  let mensagem = ''
  mensagem += '\n----------------------------\n'
  mensagem += '\nLISTAGEM DE DOADORES :\n'
  mensagem += '\n----------------------------\n'
  mensagem += '\n'
  let opcao = Number(prompt(mensagem))
  return opcao
}
listarDoadores()
*/

let doadorInfo = [
  {nome: '', idade:'', peso:'', sangue:''}
]
alert(doadorInfo.nome)
