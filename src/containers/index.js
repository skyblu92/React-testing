import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)

/* main container for rest of app */