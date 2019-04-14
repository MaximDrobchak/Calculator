// https://www.youtube.com/watch?v=xWXxkFzgnFM&t=80s
import React,{ useReducer } from 'react';
import { produce } from 'immer';
import TodoView from './TodoView';
import { TodoContext } from './TodoContext';

const useImmerReducer = (reducer, initialState) =>
  useReducer(produce(reducer), initialState);

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO" : {
      todos.unshift({ text: action.text , complete: false });
      return;
    }
    case "TOGGLE_COMPLETE" : {
      todos[action.i].complete = !todos[action.i].complete;
      return;
    }
    case "RESET" : {
      return [];
    }

    default:
      return todos;
  }
}

export default () => {
  const [todos, dispatch] = useImmerReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos: dispatch }}>
      <TodoView />
    </TodoContext.Provider>
  )
}