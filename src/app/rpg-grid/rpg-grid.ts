import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RpgTile } from "../rpg-tile/rpg-tile";
import { Tile,  emptyTile, isTileEmpty } from '../shared/tile';
import { emptyMap, Map } from '../shared/map';
import { ReactiveFormsModule } from "@angular/forms";
import { RpgEdit } from "../rpg-edit/rpg-edit";

@Component({
  selector: 'rpg-grid',
  imports: [RpgTile, ReactiveFormsModule, RpgEdit],
  templateUrl: './rpg-grid.html',
  styleUrl: './rpg-grid.css'
})
export class RpgGrid implements OnChanges {

  @Input()
  public name = '';

  @Input()
  public map: Map = emptyMap();
  public selected?: Tile;

  @HostBinding("style.--css-rows")
  public rows: number = this.map.rows;
  @HostBinding("style.--css-cols")
  public cols: number = this.map.cols;

  ngOnChanges(changes: SimpleChanges): void {
    this.rows = this.map.rows;
    this.cols = this.map.cols;
  }  

  public getRows() {
    return [...Array(this.rows).keys()].reverse();
  }

  public getCols() {
    return [...Array(this.cols).keys()];
  }

  public addRow() {
    this.map.rows++;
    this.rows++;
  }
  
  public addCol() {
    this.map.cols++;
    this.cols++;
  }

  public addColLeft() {
    this.addCol();
    this.moveTiles(1,0);
  }

  public removeColLeft() {
    this.moveTiles(-1,0);
    this.removeCol();
  }

  public removeRow() {
    this.map.rows--;
    this.rows--;
  }
  
  public removeCol() {
    this.map.cols--;
    this.cols--;
  }

  public addRowBottom() {
    this.addRow();
    this.moveTiles(0,1);
  }

  public removeRowBottom() {
    this.moveTiles(0,-1);
    this.removeRow();
  }

  private moveTiles(x: number, y: number) {
     this.map.tiles.forEach(tile => {
      tile.x += x;
      tile.y += y;
    })
  }

  public getTile(row: number, col: number) {
    var tile = this.map.tiles.find(t => t.x == col && t.y == row);
    if( tile == undefined ) {
      tile = emptyTile(col, row);
      this.map.tiles.push(tile);
    }    
    return tile;
  }

  public selectTile(tile: Tile) {
    this.selected = this.selected == tile ? undefined : tile;
  }

  public rescale() {
    const minX = Math.min(...this.map.tiles.filter(t => !isTileEmpty(t)).map(t => t.x));
    const minY = Math.min(...this.map.tiles.filter(t => !isTileEmpty(t)).map(t => t.y));
    this.moveTiles(-minX, -minY);
  }

}
