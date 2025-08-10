import { Tile } from "./tile";

export interface Map {
    rows: number;
    cols: number;
    tiles: Tile[]
}

export function emptyMap() : Map {
    return {
        rows: 20,
        cols: 20,
        tiles: []
    };
}