import { Routes } from '@angular/router';
import { RpgMap } from './rpg-map/rpg-map';
import { RpgMaps } from './rpg-maps/rpg-maps';

export const routes: Routes = [
    {path: 'maps', component: RpgMaps},
    {path: 'maps/:name', component: RpgMap},
    {path: '**', redirectTo: '/maps'}
];
