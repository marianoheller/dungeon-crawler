import Engine from './Helpers/Engine'

export function gameHasStarted(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            return {
                ...state,
                dungeon: Engine.generateDungeon(),
                gameHasStarted: true,
            };

        default:
            return state;
    }
}
