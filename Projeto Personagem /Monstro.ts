class Monstro //Classe Monstro
{
    //1. Objeto | Caracteristicas:
    nome:string
    tipo:string
    forca:number
    saude:number

    //2. Constructor | Metodo para Inicializar o Objeto:
    constructor(monstroNome: string, monstroTipo: string, monstroForca: number)
    {
        this.nome = monstroNome
        this.tipo = monstroTipo
        this.forca = 87
        this.saude = 56    
    }

    //3. Metodo para Chamar o Objeto:
    atacar(guerreiro: Guerreiro): void
    {
        console.log(`O ${this.nome} ataca o ${guerreiro.nome}`)
    }
}
