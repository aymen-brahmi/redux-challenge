 import React from 'react'
 
 function todos({task} ) {
     return (
         <div className="tasks">
             <h2>{task.text} </h2>
             <button>done</button>
             <button>delete</button>
         </div>
     )
 }
 
 export default todos
 