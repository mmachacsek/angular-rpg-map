import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { WALL, Tile, Border, Center } from '../shared/tile';
import { RpgTile } from '../rpg-tile/rpg-tile';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'rpg-edit',
  imports: [RpgTile, ReactiveFormsModule],
  templateUrl: './rpg-edit.html',
  styleUrl: './rpg-edit.css'
})
export class RpgEdit implements OnChanges {
  
  @Input() 
  public tile : Tile = WALL;
  
  fieldControl = new FormControl('', {
    nonNullable: true
  });
    
  messageControl = new FormControl('', {
    nonNullable: true
  })

  ngOnChanges(changes: SimpleChanges): void {
    this.fieldControl.setValue(this.tile.field);    
    this.fieldControl.valueChanges.subscribe(value => {
      this.tile.field = value;
    });
    this.messageControl.setValue(this.tile.message || '');
    this.messageControl.valueChanges.subscribe(value => {
      this.tile.message = value;
    })
  }

  public setField(value: string) {
    this.fieldControl.setValue(value);
  }
  
  public toggleTop() {
    this.tile.top = this.getNextBorder(this.tile.top);
  }

  public toggleLeft() {
    this.tile.left = this.getNextBorder(this.tile.left);  
  }

  public toggleRight() {
    this.tile.right = this.getNextBorder(this.tile.right);
  }

  public toggleBottom() {
    this.tile.bottom = this.getNextBorder(this.tile.bottom);    
  }

  public toggleCenter() {
    this.tile.center = this.getNextCenter(this.tile.center);
  }

  public erase() {
    this.tile.bottom = Border.none;
    this.tile.top = Border.none;
    this.tile.left = Border.none;
    this.tile.right = Border.none;
    this.tile.center = Center.floor;
    this.tile.message = '';
    this.setField('.');
  }

  getNextBorder(border: Border) {
    if (border == Border.none) return Border.wall;
    if (border == Border.wall) return Border.door;
    if (border == Border.door) return Border.passage;
    return Border.none;
  }

  getNextCenter(center: Center) {
    if (center == Center.floor) return Center.dark;
    if (center == Center.dark) return Center.water;
    if (center == Center.water) return Center.solid;
    return Center.floor;
  }
}
