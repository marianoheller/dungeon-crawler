import newDungeon from './DungeonGenerator';
import { generateItems, generateEnemies, generateFogged } from './ElementsGenerator';
import { initialState, baseExpPerLvl, baseHealthMin, elementsConfig } from '../../App.config';

export default class Engine {

    static generateDungeon({width = 50, height = 50, minRoomSize = 5, maxRoomSize = 20}={}) {
        const options = {
            width,  
            height,
            minRoomSize,
            maxRoomSize,
        };
        const dungeon = {};
        dungeon["raw"] = newDungeon(options);
        dungeon["items"] =  generateItems( dungeon );
        dungeon["enemies"] = generateEnemies( dungeon );
        dungeon["playerPosition"] = this.generatePlayerPosition( dungeon );
        dungeon["fogged"] = generateFogged(dungeon, true);
        return dungeon;
    }

    static processKeyPress( dungeon, move ) {
        const { x: prevX , y: prevY } = dungeon.playerPosition;
        const { x: valX, y: valY } = move.value;
        
        const newPos = { x: prevX + valX , y: prevY + valY };
        if ( dungeon.raw[newPos.y][newPos.x] === elementsConfig.wall.symbol ) {
            return dungeon;
        }
        if ( dungeon.enemies[newPos.y][newPos.x] === elementsConfig.enemy.symbol) {
            return dungeon;
        }
        const newFogged = generateFogged( {
            ...dungeon,
            playerPosition: newPos,
        });
        return {
            ...dungeon,
            fogged: newFogged,
            playerPosition: newPos,
        };
    }

    static generatePlayerPosition( dungeon ) {
        if ( !dungeon ) {   throw new Error(`Param erroneo al generar position. dungeon: ${dungeon}`)   }          

        return { x: 1, y: 1 }
    }

    static generatePlayerStats() {
        const stats = {};

        //Generate stats
        Object.keys(initialState.player.stats).forEach( (key) => {
            switch (key) {
                case "name":
                    stats[key] = "aaaaa";
                    break;
                case "health":
                    stats[key] = baseHealthMin + Math.ceil(Math.random()*10)*10;
                    break;
                case "weapon":
                    stats[key] = 'none';
                    break;
                case "attack":
                    stats[key] = Math.ceil(Math.random()*10);
                    break;
                case "level":
                    stats[key] = Math.ceil(Math.random()*10);
                    break;
                case "expPerLvl":
                    stats[key] = baseExpPerLvl + (Math.ceil(Math.random()*50)-100);
                    break;
                case "exp":
                    stats[key] = 0;
                    break;
                default:
                    throw new Error(`Incorrect player key object. Key: ${key}`);
            }
        });

        return stats;
    }
}