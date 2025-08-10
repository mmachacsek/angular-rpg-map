import { Component, inject, Input} from '@angular/core';
import { emptyMap, Map } from '../shared/map';
import { ReactiveFormsModule } from "@angular/forms";
import { StorageService } from '../shared/storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'rpg-menu',
  imports: [ReactiveFormsModule],
  templateUrl: './rpg-menu.html',
  styleUrl: './rpg-menu.css'
})
export class RpgMenu {

  private router = inject(Router);
  private storageService = inject(StorageService);

  @Input()
  public name : string = '';

  @Input()
  public map? : Map;

  public save() {
    if( this.map ) {
      this.storageService.saveMap(this.name, this.map);
    }
  }

  public export() {
    if( this.map ) {
      this.storageService.exportMap(this.name, this.map);
    }
  }

  public delete() {
    if(confirm("Are you sure to delete " + this.name)) {
      this.storageService.removeMap(this.name);
      this.router.navigate(['maps']).then();
    }
  }
  
  public back() {
    this.router.navigate(['maps']).then()
  }
}
