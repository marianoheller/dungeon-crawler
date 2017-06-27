
//=========================================================
//App config

export const baseExpPerLvl = 100;
export const baseHealthMin = 20;

export const initialState = {
    game: {
        dungeon: undefined,
        contDungeon: undefined,
        gameHasStarted: false,
        position: {
            x: undefined,
            y: undefined,
        },
    },
    player: {
        stats: {
            name: undefined,
            health: undefined,
            weapon: undefined,
            attack: undefined,
            level: undefined,
            exp: undefined,
            expPerLvl: undefined,
        },
    },
}

//==========================================================
// Elements config

export const dungeonConfig = {
    width: 50,
    height: 30, 
    minRoomSize: 5, 
    maxRoomSize: 10,
}

export const elementsConfig = [
    {
        type: "floor",
        class: " tile-floor ",
        symbol: "0",
    },
    {
        type: "wall",
        class: " tile-wall ",
        symbol: "1",
    },
    {
        type: "item",
        class: " tile-item ",
        symbol: "?",
        cant: dungeonConfig.width * dungeonConfig.height * 0.01,
    },
    {
        type: "enemy",
        class: " tile-enemy ",
        symbol: "+",
        cant: dungeonConfig.width * dungeonConfig.height * 0.01,
    }
]
