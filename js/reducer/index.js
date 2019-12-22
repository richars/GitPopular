import {combineReducers} from 'redux'
import theme from './theme'
import popular from './popular'
import trending from './trending'
import favorite from './favorite'
import language from './language'
import search from './search'

/**
 * 3.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
    theme: theme,
    popular: popular,
    trending: trending,
    favorite: favorite,
    language: language,
    search: search,
});

export default index;
