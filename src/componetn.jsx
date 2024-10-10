import React, { useState } from 'react';
import Create from './Create';

const Componetn = () => { // Notice the uppercase 'C'
    const [todos,setTodos] = useState([]);
  return (
    <div>
        <h2>Todolist</h2>
        <Create/>
        {
            todos.length === 0 ?
            <h2> No Records</h2>
            :
        todos.map((todo)=>(
            <div>

            </div>
        ))}
    </div>
  );
}

export default Componetn;
