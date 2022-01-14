import React from 'react'
import Todos from './todos';
function todolist({todos} ) {
    return (
        <div>
            
            {
                todos.map ((el,id) => <Todos task={el}  id={id}/>)
            }
        </div>
    )
}

export default todolist
