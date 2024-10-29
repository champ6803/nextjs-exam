import { combineReducers } from 'redux'
import auth from './auth'
import page from './page'

const reducer = combineReducers({
	auth,
	page
})

export default reducer
