import NewDungeon from './DungeonGenerator';

export default class Engine {

    static generateDungeon({width = 50, height = 50, minRoomSize = 5, maxRoomSize = 20}={}) {
        const options = {
            width,  
            height,
            minRoomSize,
            maxRoomSize,
        };
        const rawDungeon = NewDungeon(options);
        return rawDungeon;
    }
}