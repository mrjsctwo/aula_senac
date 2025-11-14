import {Animal} from "./Animal"//Import
export class Owl extends Animal{//Export
        
        //Características 
        constructor(name: string, weight:number){
        super(name, weight)
     }
        
        //Latir
        bark():void{
           console.log('Wru,Wru')
   }

}
