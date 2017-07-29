import Engine from './Helpers/Engine'

export function gameState(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            return {
                ...state,
                dungeon: action.dungeon,
                contDungeon: 0,
                gameHasStarted: action.gameHasStarted,
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
                dungeon: null,
                gameHasStarted: action.gameHasStarted,
            };
        case 'KEY_PRESS':
            const { dungeon } = state;
            const afterKeyDungeon = Engine.processKeyPress( dungeon, action.key );
            return {
                ...state,
                dungeon: afterKeyDungeon,
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
                stats: action.playerStats,
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
            };

        default:
            return state;
    }
}
