import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="App container">
    <h1 className="center blue-text"> Todo's</h1>
    <h4 className="center">Click each item to complete</h4>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App