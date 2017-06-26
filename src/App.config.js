
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