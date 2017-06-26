
export const baseExpPerLvl = 100;
export const baseHealthMin = 20;

export const initialState = {
    game: {
        dungeon: null,
        contDungeon: 0,
        gameHasStarted: false,
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
        position: {
            x: undefined,
            y: undefined,
        },
    },
}