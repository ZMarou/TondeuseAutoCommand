import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/toArray';
import 'rxjs/Rx';
import { range } from 'rxjs/observable/range';
import { flatMap } from 'rxjs/operators';
import { Tondeuse } from './tondeuse';
import { forEach } from '@angular/router/src/utils/collection';
import { TondeuseService } from '../tondeuse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[TondeuseService]
})
export class HomeComponent implements OnInit {

  nbrRow: number;
  nbrCol: number;
  rowsArray: number[];
  colsArray: number[];
  currentTondeuse: Tondeuse;
  displayedTondeuse: Tondeuse;
  tondeusesArray: Tondeuse[];
  terrain; 
  colorMatrice;

  constructor(private tondeuseService: TondeuseService) {
  }

  ngOnInit() {
    this.nbrRow = 5;
    this.nbrCol = 5;
    this.init();
  }

  onChange($event) {
    this.resizeTab();
  }

  resizeTab() {
    this.init();
  }

  ajouterTondeuse() {
    this.currentTondeuse.id = this.tondeusesArray.length  + 1;
    this.currentTondeuse = this.determinerTondeuseHorsPerimetre(this.currentTondeuse);
    this.tondeusesArray.push(this.currentTondeuse);
    this.currentTondeuse = new Tondeuse(1, 0, 0, 'red', false);
  }

  init(){
    this.currentTondeuse = new Tondeuse(1, 0, 0, 'red', false);
    this.tondeusesArray = new Array();
    this.initTerrain()
  }

  initTerrain(){
    this.rowsArray = new Array();
    this.colsArray = new Array();
    for (var _i = 0; _i < this.nbrRow; _i++) {
      this.rowsArray.push(_i);
    }
    for (var _i = 0; _i < this.nbrCol; _i++) {
      this.colsArray.push(_i);
    }
    this.terrain = new Array();
    for (var _i = 0; _i < this.nbrCol; _i++) {
      this.terrain[_i] = new Array();
      for (var _j = 0; _j < this.nbrRow; _j++) {
        this.terrain[_i][_j] = 0;
      }
    }
    this.colorMatrice = new Array();
    for (var _i = 0; _i < this.nbrCol; _i++) {
      this.colorMatrice[_i] = new Array();
      for (var _j = 0; _j < this.nbrRow; _j++) {
        this.colorMatrice[_i][_j] = '';
      }
    }
    console.log(this.colorMatrice);
    console.log(this.terrain)
  }

  avancer($event){
    this.initTerrain();
    this.tondeusesArray = this.tondeuseService.calculerParcours(this.nbrCol,this.nbrRow, this.tondeusesArray, $event);
    console.log(this.tondeusesArray);
    this.tondeusesArray.forEach(item => {
      item = this.determinerTondeuseHorsPerimetre(item);
    });
  }

  determinerTondeuseHorsPerimetre(tondeuse:Tondeuse){
    if (tondeuse.posX + 1 > this.nbrCol || tondeuse.posY + 1 > this.nbrRow ||tondeuse.posX < 0 || tondeuse.posY < 0) {
      tondeuse.erreur = true;
    } else {
      tondeuse.erreur = false;
      this.terrain[tondeuse.posX][tondeuse.posY] = tondeuse.id;
      this.colorMatrice[tondeuse.posX][tondeuse.posY] = tondeuse.color;
    }
    return tondeuse;
  }




}
