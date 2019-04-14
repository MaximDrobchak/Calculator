import React, { useState, useContext } from 'react';

import { TodoContext } from './TodoContext';

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  }
}

export default React.memo(() => {
  const { resetValue, ...text } = useInputValue('');
  const { dispatch } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({text: text.value, type: 'ADD_TODO'});
    resetValue();
  }
  console.log('<Form /> is rendering...');
  return (
    <form
      onSubmit={onSubmit}>
      <input {...text} />
      </form>
      )
    });