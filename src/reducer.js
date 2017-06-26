import { combineReducers } from 'redux';
import { gameState, playerState } from './crawler/CrawlerReducers';

export default combineReducers({
    game: gameState,
    player: playerState,
});