import NewDungeon from './DungeonGenerator';
import GenerateElements from './ElementsGenerator';
import { initialState, baseExpPerLvl, baseHealthMin } from '../../App.config';

export default class Engine {

    static generateDungeon({width = 50, height = 50, minRoomSize = 5, maxRoomSize = 20}={}) {
        const options = {
            width,  
            height,
            minRoomSize,
            maxRoomSize,
        };
        const rawDungeon = GenerateElements( NewDungeon(options) );
        return rawDungeon;
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