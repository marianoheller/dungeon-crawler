import Engine from './Helpers/Engine'
import { dungeonConfig } from '../App.config';

export function gameState(state = null, action) {
    switch (action.type) {
        case 'GAME_HAS_STARTED':
            const newDungeon = Engine.generateDungeon( dungeonConfig );
            return {
                ...state,
                dungeon: newDungeon,
                contDungeon: 0,
                gameHasStarted: true,
                position: Engine.generatePlayerPosition( newDungeon ),
            };
        case 'GAME_HAS_FINISHED':
            return {
                ...state,
                dungeon: null,
                gameHasStarted: false,
            };
        case 'KEY_PRESS':
            const { dungeon, position } = state;
            const newPosition = Engine.processKeyPress( dungeon, position, action.key )
            return {
                ...state,
                position: {
                    ...state.position,
                    x: newPosition.x,
                    y: newPosition.y,
                }
            }
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
