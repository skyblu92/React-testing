import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/*combining reducers into 1 from the todo list items and the visibility filter */

export default combineReducers({
  todos,
  visibilityFilter
})