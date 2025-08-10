import {Injectable} from '@angular/core';
import { isTileEmpty } from '../shared/tile';
import { Map } from '../shared/map';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  getMapNames() : string[] {
    var result: string[] = [];
    for (var key in localStorage){
      if( key.startsWith('rpg_')) {
        result.push(key.substring(4))
      }
    }
    return result.sort();
  }

  getMap(mapName: string) : Map | undefined {
    const loaded = localStorage.getItem('rpg_' + mapName);
    if (loaded) {      
      return JSON.parse(loaded) as Map;
    }
    return undefined;
  }

  saveMap(mapName:string, map: Map) {
    this.saveMapAsJson(mapName, this.toJson(map));
  }

  saveMapAsJson(mapName: string, json: string) {
    localStorage.setItem('rpg_' + mapName, json);
  }

  private toJson(map: Map) {
    const filtered = map.tiles.filter(tile => !isTileEmpty(tile));
    return JSON.stringify({
      ...map,
      tiles: filtered
    });
  }
  
  exportMap(mapName:string, map: Map) {
    const data = this.toJson(map);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = mapName + ".json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  removeMap(mapName: string) {    
    localStorage.removeItem('rpg_' + mapName);
  }

}
