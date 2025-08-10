import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RpgGrid } from "../rpg-grid/rpg-grid";
import {Title} from "@angular/platform-browser";
import { StorageService } from '../shared/storage-service';
import { emptyMap, Map } from '../shared/map';
import { RpgMenu } from "../rpg-menu/rpg-menu";

@Component({
  selector: 'rpg-map',
  imports: [RpgGrid, RpgMenu],
  templateUrl: './rpg-map.html',
  styleUrl: './rpg-map.css'
})
export class RpgMap {

  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private storageService = inject(StorageService);

  @Input()
  public name = '';

  public map? : Map;

  constructor() {
    this.activatedRoute.params.subscribe(params => {
        this.name = params['name']
        this.titleService.setTitle(this.name);
        this.map = this.storageService.getMap(this.name) || emptyMap();
      }
    )   
  }
}
