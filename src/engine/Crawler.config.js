
const expPerLvlBase = 100

export const initialState = {
    game: {
        dungeon: null,
        contDungeon: 0,
        gameHasStarted: false,
    },
    player: {
        health: Math.ceil(Math.random()*10)*10,
        weapon: 'none',
        attack: Math.ceil(Math.random()*10),
        level: Math.ceil(Math.random()*10),
        exp: 0,
        expPerLvl: expPerLvlBase + (Math.ceil(Math.random()*50)-100),
        position: {
            x: null,
            y: null,
        },
    },
}