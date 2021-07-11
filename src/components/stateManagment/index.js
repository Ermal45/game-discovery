import {combineReducers} from 'redux';
import {GameReducer} from './reducers/GameReducer'
import {MoreDataReducer} from './reducers/MoreDataReducer'


export const GroupedReducers = combineReducers({
    games: GameReducer,
    dropdown: MoreDataReducer,
})



