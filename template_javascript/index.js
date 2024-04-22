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

if (option ===1) {
    alert("Preparando cafe Expresso!")
}

if (option ===2) {
    alert("Preparando cafe Capuccino!")
}

if (option ===3) {
    alert("Preparando cafe Frapuccino!")
}