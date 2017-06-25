import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items/itemsReducers';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});