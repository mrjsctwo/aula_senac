import {Animal} from "./Animal"
export class Owl extends Animal{
        
        constructor(name: string, weight:number){
        super(name, weight)
     }

        bark():void{
           console.log('Wru,Wru')
   }

}
