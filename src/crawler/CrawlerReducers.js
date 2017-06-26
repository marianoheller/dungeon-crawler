import Engine from './Helpers/Engine'

export function gameState(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            return {
                ...state,
                dungeon: Engine.generateDungeon(),
                contDungeon: 0,
                gameHasStarted: true,
                position: Engine.generatePlayerPosition(),
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
                dungeon: null,
                gameHasStarted: false,
            };

        default:
            return state;
    }
}


export function playerState(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            return {
                ...state,
                stats: Engine.generatePlayerStats(),
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
            };

        default:
            return state;
    }
}
