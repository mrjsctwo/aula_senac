//Recebeu as variaveis
let nome = prompt("Digite seu nome ")
let idade = prompt("Digite sua idade ")
//MENSAGEM: Digite as horas que voce trabalha de  por dia:
let horasTrabalho = prompt("Digite as horas de que voce trabalha por dia")
let salarioDia = prompt("Digite o seu salario diario:")
//Verificando variaveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof SalarioDia)
//Convertendo o que e necessario
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//Processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
//Conversao para nao dar erro de NULL
const mensagem ="Seu valor e " + valorHora + "!!!"
//Verificando variaveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saida de valores para Front End
alert(mensagem)