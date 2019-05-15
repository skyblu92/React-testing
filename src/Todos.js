import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length !== 0 ? ( //show each item in collection
        todos.map(todo => {                
        return (
            <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}} > {todo.content}</span>
            </div> 
        )
    })) : (
        <p className="center">empty list</p> //unless 0 objects in collection
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;