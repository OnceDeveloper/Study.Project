import React from 'react';
import styled from 'styled-components';
import Todo from './todo';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const Todolist = ({ todolist, editTodo, delTodo }) => (
  <Ul>
    {todolist.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        value={todo.value}
        editTodo={editTodo}
        delTodo={delTodo}
      />
    ))}
  </Ul>
);

export default Todolist;
