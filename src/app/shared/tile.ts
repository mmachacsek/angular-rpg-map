export enum Border {
    none,
    wall,
    door,
    passage
}

export enum Center {
    solid,
    floor,
    dark,
    water
}

export enum Direction {
    left,
    right,
    top,
    bottom
}

export interface Tile {
    x: number;
    y: number;
    left: Border,
    right: Border,
    top: Border,
    bottom: Border,
    center: Center,
    field: string,
    message?: string,
}

export function isTileEmpty(tile: Tile) : boolean {
    return tile.left == Border.none && 
        tile.right == Border.none &&
        tile.top == Border.none &&
        tile.bottom == Border.none &&
        tile.center == Center.floor &&
        tile.field == '.';
}

export const WALL : Tile = {
    x: 0,
    y: 0,
    left: Border.wall,
    right: Border.wall,
    top: Border.wall,
    bottom: Border.wall,
    center: Center.solid,
    field: '.'
}

export const SPACE : Tile = {
    x: 0,
    y: 0,
    left: Border.none,
    right: Border.none,
    top: Border.none,
    bottom: Border.none,
    center: Center.floor,
    field: '.'
}

export function randomTile(x: number, y: number) : Tile {
    return {
      x: x,
      y: y,
      left: getBorder(),
      top: getBorder(),
      right: getBorder(),
      bottom: getBorder(),
      center: getCenter(),
      field: '.'
    };
}

export function emptyTile(x: number, y: number) : Tile {
    return {        
      ...SPACE,
      x: x,
      y: y
    };
}


function getBorder() : Border {
    const random = Math.random();
    if( random < 0.2 ) return Border.door;
    if( random < 0.5 ) return Border.wall;
    return Border.none;
}

function getCenter() : Center {   
    return Center.floor;
}