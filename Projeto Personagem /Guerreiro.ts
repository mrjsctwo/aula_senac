class Guerreiro //Classe Guerreiro
{
    //1. Objeto | Caracteristicas:
    nome:string
    tipo:string
    forca:number
    saude:number
    
    //2. Constructor | Metodo para Inicializar o Objeto:
    constructor(guerreiroNome: string, guerreiroTipo: string, guerreiroForca: number)
    {
        this.nome = guerreiroNome
        this.tipo = guerreiroTipo
        this.forca = 50
        this.saude = 100  
    }
    
    //3. Metodo para Chamar o Objeto:
    atacar(monstro:Monstro): void
    {
        console.log(`O ${this.nome} ataca o monstro ${this.nome}`)
    }

    receberDano(dano:number): void
    {
        this.saude = dano
    }
    
    defender(guerreiro: Guerreiro): void 
    {
        console.log(`O ${this.nome} defende o ataque do monstro `)
    }
}
