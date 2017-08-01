
//=========================================================
//App config

export const baseExpPerLvl = 5;
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
        player: {
            stats: {
                health: undefined,
                weapon: undefined,
                attack: undefined,
                level: undefined,
                exp: undefined,
                expPerLvl: undefined,
            },
        },
    },
   
};

export const validKeys = [
    {
        key: "ArrowUp",
        value: {
            x: 0,
            y: -1,
        },
    },
    {
        key: "ArrowDown",
        value: {
            x: 0,
            y: 1,
        },
    },
    {
        key: "ArrowRight",
        value: {
            x: 1,
            y: 0,
        },
    },
    {
        key: "ArrowLeft",
        value: {
            x: -1,
            y: 0,
        },
    },
]

//==========================================================
// Elements config

export const dungeonConfig = {
    width: 50,
    height: 30, 
    minRoomSize: 5, 
    maxRoomSize: 10,
}

export const elementsConfig = {
    floor: {
        class: " tile-floor ",
        symbol: "0",
    },
    wall: {
        class: " tile-wall ",
        symbol: "1",
    },
    player: {
        class: " tile-player ",
        symbol: "P",
    },
    item: {
        class: " tile-item ",
        symbol: "?",
        prob: 0.0075,
    },
    enemy: {
        class: " tile-enemy ",
        symbol: "+",
        prob: 0.0075,
    },
    fog: {
        class: " tile-fog ",
        radius: 5,
        symbol: "F",
    },
    boss: {
        class: " tile-boss ",
        symbol: "S",
    }
}
