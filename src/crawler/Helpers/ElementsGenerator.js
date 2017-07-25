import { elementsConfig } from '../../App.config';


export default class ElementsGenerator {

    static generateItems( dungeon ) {    
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }          

        const itemsLayer = dungeon.raw.map( (row) => row.map( (tile) => {
            if ( tile <= 1 ) {   return "";   }
            if ( Math.random() < elementsConfig.item.prob ) {
                return elementsConfig.item.symbol;
            }
            return "";
        }))
        return itemsLayer;
    }


    static generateEnemies( dungeon ) { 
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }

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

    
    static generateStartingPoint( dungeon ) {
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }

        const { width } = dungeon.options;
        
        const singleArray = dungeon.raw.reduce( (acc, row) => acc.concat(row), [])
        .map( (tile, tileIndex) => {
            return {tile, tileIndex};
        }).filter( (tObj, i) => {
            const rowInd =  Math.floor(i/width);
            const tileInd = i%width;

            return tObj.tile!=="1" & 
            !dungeon.items[rowInd][tileInd] & 
            !dungeon.enemies[rowInd][tileInd];
        } );

        const cantFreeTiles = singleArray.length;
        const mocIndex = Math.floor(Math.random()*cantFreeTiles);
        const tObj = singleArray[mocIndex]; 
        
        const position = {
            y: Math.floor( tObj.tileIndex / width ),
            x: tObj.tileIndex % width,
        }
        return position;
    }


    static generateStairs( dungeon ) {
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }
        
        const { width } = dungeon.options;
        const { x, y } = dungeon.playerPosition;
        
        const singleArray = dungeon.raw.reduce( (acc, row) => acc.concat(row), [])
        .map( (tile, tileIndex) => {
            return {tile, tileIndex};
        }).filter( (tObj, i) => {
            const rowInd =  Math.floor(i/width);
            const tileInd = i%width;

            return tObj.tile!=="1" & 
            !dungeon.items[rowInd][tileInd] & 
            !dungeon.enemies[rowInd][tileInd] &
            rowInd !== y &
            tileInd !== x;
        } );

        const cantFreeTiles = singleArray.length;
        const mocIndex = Math.floor(Math.random()*cantFreeTiles);
        const tObj = singleArray[mocIndex]; 
        
        const position = {
            y: Math.floor( tObj.tileIndex / width ),
            x: tObj.tileIndex % width,
        }

        return position;
    }


    static generateFogged( dungeon, init=false ) {
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }          
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

}