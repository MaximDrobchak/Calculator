import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export default () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <div>
      {todos.map(({ text, comlete }, i) => (
        <div
          key={text}
          onClick={() => dispatch({ type: "TOGGLE_COMPLETLE" , i})}
          style={{
            textDecoration: comlete ? "line-through" : ""
          }}>
          {text}
        </div>
      ))}
    </div>
  )
}