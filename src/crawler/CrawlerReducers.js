import Engine from './Helpers/Engine'

export function gameState(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            return {
                ...state,
                dungeon: action.dungeon,
                gameHasStarted: action.gameHasStarted,
                player: {
                    ...state.player,
                    stats: action.playerStats,
                }
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
                dungeon: null,
                gameHasStarted: action.gameHasStarted,
            };
        case 'KEY_PRESS':
            const afterKeyState = Engine.processKeyPress( {...state}, action.key );
            return afterKeyState;
        default:
            return state;
    }
}

