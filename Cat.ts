import {Animal} from "./Animal"
export class Cat extends Animal{
    
    constructor(name: string, weight:number){
        super(name, weight)
   }
      bark():void{
          console.log('Au,Au')

      }
}


