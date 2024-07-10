/*
//AULA 04 - TYPESCRIPT

//STRING

let nome:string = 'Murilo'
let idade:number = 29
let souEstudante:boolean = false

console.log(`Meu nome é ${nome} e tenho ${idade} anos. Sou estudante? ${souEstudante}.`)

//Criem uma funçao que pede nome, idade e se tem carteria de motorista

//-- npx tsc index.ts
//-- node index.js

//readline-sync

import * as readline from 'readline-sync'

let nome: string = readlineSync.question('Qaul é seu nome?')
let idade: number = Number(readlinesync.question('Qual a suas idade?'))
let temCarteira: string  = readlineSync.question('Voce possui carteira de motorista para dirigir?(Sim/Nao)')



function podeDirigir (myname: string, myIdade: number, myCarteira: boolean):void{
        
    if (idade >= 18 && temCarteira === 'Sim') {
            console.log('Vode pode dirigir')
        }else{
            console.log('Voce nao pode dirigir')
        }
        
        console.log(`Meu nome é ${nome}, tenho ${idade} e tenho carteria? ${temCarteira}.`)
}

podeDirigir(nome,idade, temCarteira)

// PASSO 1 - INSTALAR O TYPESCRIPT
// NPM INSTALL -G TYPESCRIPT ou NPM INSTALL TYPESCRIPT
// PASSO 2 - TRANSPILAR PARA JS
// NPX TSC NOMEARQUIVO.TS
// PASSO 3 - RODAR O ARQUIVO JS
// NODE NOMEARQUIVO.JS

//AULA 05 - ARRAY E OBJETOS

]//ARRAY
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

//OBJETO

var person = {
    name: 'Mr',
    age: 20
};
function soma(num1, num2) {
    return num1 + num2;
}
function frase(nome) {
    return "Ola ".concat(nome, ", TUDO BEM?");
}
function chamaAlgo(nome) {
    console.log("E ai ".concat(nome, "!"));
}
function sayHello(name) {
    console.log('Hello', name || 'World');
}

*/