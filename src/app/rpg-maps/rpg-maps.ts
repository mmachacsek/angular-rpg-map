import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import { Router, RouterLink} from "@angular/router";
import { StorageService } from '../shared/storage-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rpg-maps',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './rpg-maps.html',
  styleUrl: './rpg-maps.css'
})
export class RpgMaps {
  private router = inject(Router);
  private storageService = inject(StorageService);
  private titleService = inject(Title);

  nameControl = new FormControl('', {
    nonNullable: true
  });

  constructor() {
    this.titleService.setTitle('RPG Maps')
  }

  public getMaps() : string[] {
    return this.storageService.getMapNames();
  }

  public open(mapName: string) {
    this.router.navigate(['maps', mapName]).then();
  }

  public create() {
    const mapName = this.nameControl.value;
    this.router.navigate(['maps', mapName]).then();
  }

  public onFileSelected(event: any) {
    const file:File = event.target.files[0];
    const router = this.router;
    const storageService = this.storageService;
    if( file ) {
      const reader = new FileReader();
       reader.readAsText(file, "UTF-8");
       reader.onload = function (evt) {
         const json = evt.target?.result as string;
         const mapName = file.name.replace(".json", "");
         storageService.saveMapAsJson(mapName, json);
         router.navigate(['maps', mapName]).then();
       }
    }
  }
}
