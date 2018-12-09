import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/visibleTodoList'

const App = (props) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
