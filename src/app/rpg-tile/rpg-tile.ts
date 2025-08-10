import { Component, Input } from '@angular/core';
import { WALL, Tile, Border, Center } from '../shared/tile';

@Component({
  selector: 'rpg-tile',
  imports: [],
  templateUrl: './rpg-tile.html',
  styleUrl: './rpg-tile.css'
})
export class RpgTile {

  @Input()
  public tile : Tile = WALL;

  public getClasses() {
    const result = [];   
    if( this.tile.center == Center.solid) {
      result.push('center-solid')
    }
    if( this.tile.center == Center.dark) {
      result.push('center-dark')
    }
    if( this.tile.center == Center.water) {
      result.push('center-water')
    }
    return result;
  }

  public isWall(border: Border) {
    return border == Border.wall || border == Border.door || border == Border.passage;
  }

  public isPassage(border: Border) {
    return border == Border.passage;
  }

  public isDoor(border: Border) {
    return border == Border.door;
  }

  public isMessage() {
    return this.tile.message != undefined && this.tile.message.length > 0;
  }

  public getCenter() : string {
    if( this.tile.field ) {
      return this.tile.field;
    }
    return '.';
  }

}
