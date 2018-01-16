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
import { Terrain } from './terrain';


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
  terrain;

  constructor() {
  }

  ngOnInit() {
    this.nbrRow = 5;
    this.nbrCol = 5;
    this.rowsArray = new Array();
    this.colsArray = new Array();
    this.tondeusesArray = new Array();
    this.currentTondeuse = new Tondeuse(0, 0, 'red');
    for (var _i = 1; _i <= this.nbrRow; _i++) {
      this.rowsArray.push(_i);
    }
    for (var _i = 1; _i <= this.nbrCol; _i++) {
      this.colsArray.push(_i);
    }
    // this.terrain = new Array();
    // for (var _i = 0; _i < this.nbrRow; _i++) {
    //   this.terrain[_i] = new Array();
    //   for (var _j = 0; _j < this.nbrCol; _j++) {
    //     this.terrain[_i].push(new Terrain(false, 'red'));
    //   }
    // }
  }

  onChange($event) {
    this.resizeTab();
  }

  resizeTab() {
    if (this.nbrCol > this.colsArray.length) {
      var newItem = this.nbrCol - this.colsArray.length;
      for (var _i = 0; _i < newItem; _i++) {
        this.colsArray.push(this.colsArray.length + 1);
      }
    } else if (this.nbrCol < this.colsArray.length) {
      var newItem = this.colsArray.length - this.nbrCol;
      for (var _i = 0; _i < newItem; _i++) {
        this.colsArray.pop();
      }
    }
    if (this.nbrRow > this.rowsArray.length) {
      var newItem = this.nbrRow - this.rowsArray.length;
      for (var _i = 0; _i < newItem; _i++) {
        this.rowsArray.push(this.rowsArray.length + 1);
      }
    } else if (this.nbrRow < this.rowsArray.length) {
      var newItem = this.rowsArray.length - this.nbrRow;
      for (var _i = 0; _i < newItem; _i++) {
        this.rowsArray.pop();
      }
    }
    // this.terrain = new Array();
    // for (var _i = 0; _i < this.nbrRow; _i++) {
    //   this.terrain[_i] = new Array();
    //   for (var _j = 1; _j < this.nbrCol; _j++) {
    //     this.terrain[_i][_j] = new Terrain(false, 'red');
    //   }
    // }
  }

  ajouterTondeuse() {
    this.tondeusesArray.push(this.currentTondeuse);
    this.currentTondeuse = new Tondeuse(0, 0, 'red');
    console.log(this.tondeusesArray);
  }

  verifierTondeuse(row, col) {
    this.tondeusesArray.forEach(element => {
      if (element.posX == col && element.posY == row) {
        this.displayedTondeuse = element;
        return true;
      }
    });
    return false;
  }





}
