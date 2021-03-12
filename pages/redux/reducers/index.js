import { combineReducers } from 'redux'
import { datasReducer } from './datasReducer'

export const rootReducer = combineReducers({
    datas:datasReducer
})