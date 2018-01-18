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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbrRow: number;
  nbrCol: number;
  rowsArray: number[];
  colsArray: number[];
  currentTondeuse: Tondeuse;
  displayedTondeuse: Tondeuse;
  tondeusesArray: Tondeuse[];
  errorArray: Tondeuse[];
  terrain; 
  colorMatrice;

  constructor() {
  }

  ngOnInit() {
    this.nbrRow = 5;
    this.nbrCol = 3;
    this.initTerrain();
  }

  onChange($event) {
    this.resizeTab();
  }

  resizeTab() {
    this.initTerrain();
  }

  ajouterTondeuse() {
    if (this.currentTondeuse.posX + 1 > this.nbrCol || this.currentTondeuse.posY + 1 > this.nbrRow) {
      this.errorArray.push(this.currentTondeuse);
    } else {
      this.tondeusesArray.push(this.currentTondeuse);
      this.terrain[this.currentTondeuse.posX][this.currentTondeuse.posY] = 1;
      this.colorMatrice[this.currentTondeuse.posX][this.currentTondeuse.posY] = this.currentTondeuse.color;
    }
    this.currentTondeuse = new Tondeuse(0, 0, 'red');
  }

  initTerrain(){
    this.currentTondeuse = new Tondeuse(0, 0, 'red');
    this.rowsArray = new Array();
    this.colsArray = new Array();
    this.tondeusesArray = new Array();
    this.errorArray = new Array();
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





}
