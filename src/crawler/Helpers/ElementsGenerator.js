import { elementsConfig } from '../../App.config';

export function generateItems( dungeon ) {    

    const itemsLayer = dungeon.raw.map( (row) => row.map( (tile) => {
        if ( tile <= 1 ) {   return "";   }
        if ( Math.random() < elementsConfig.item.prob ) {
            return elementsConfig.item.symbol;
        }
        return "";
    }))
    return itemsLayer;
}


export function generateEnemies( dungeon ) {    

    const enemiesLayer = dungeon.raw.map( (row, rowIndex) => row.map( (tile, tileIndex) => {
        if ( tile <= 1 ) {   return "";   }
        if (  dungeon.items[rowIndex][tileIndex]  === elementsConfig.item.symbol) {   return "";   }
        if ( Math.random() < elementsConfig.enemy.prob ) {
            return elementsConfig.enemy.symbol;
        }
        return "";
    }))
    
    return enemiesLayer;
}

export function generateFogged( dungeon, init=false ) {
    const fogConfig = elementsConfig.fog;

    const isVisible = function _isVisible(x,y) {
        const { x:pX, y:pY } = dungeon.playerPosition;
        const distance = Math.sqrt( Math.pow(pX-x, 2) + Math.pow(pY-y, 2) );
        return distance < fogConfig.radius
    }

    if ( init ) {
        return dungeon.raw.map( (row, rowIndex) => row.map( (tile, tileIndex) => {
            if ( isVisible(tileIndex, rowIndex) )  {   return "";  }
            return elementsConfig.fog.symbol;
        } ));
    }

    return dungeon.fogged.map( (row, rowIndex) => row.map( (tile, tileIndex) => {
        if ( isVisible(tileIndex, rowIndex) )  {   return "";  }
        return tile;
    } ));
    
}
