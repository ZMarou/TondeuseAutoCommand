import { Injectable } from '@angular/core';
import { Tondeuse } from './home/tondeuse';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class TondeuseService {

  constructor() { }

  calculerParcours(nbrCol:number, nbrRow:number, tondeuses:Tondeuse[], direction:string){
    tondeuses.forEach(item => {
      if(direction === 'left'){
        item.posX--;
      }else if(direction === 'up'){
        item.posY--;
      }else if(direction === 'right'){
        item.posX++;
      }else{
        item.posY++;
      }
    });
    return tondeuses;
  }

}
