import { combineReducers } from 'redux';
import { gameHasStarted } from './engine/CrawlerReducers';

export default combineReducers({
    game: gameHasStarted,
});