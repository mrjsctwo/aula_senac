import {Animal} from "./Animal"//Importar 
export class Cat extends Animal{//Exportar
      
      //Caracteristicas
      constructor(name: string, weight:number){
      super(name, weight)
   }
      //Latir 
      bark():void{
          console.log('Miau,Miau')

      }
}


