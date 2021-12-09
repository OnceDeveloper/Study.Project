import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #c9c9c5;
  padding: 20px 0 10px;

  button {
    margin-right: 10px;
  }
  ul:nth-child(1) {
    margin-left: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

const CheckInput = styled.input`
  width: 15px;
  height: 15px;
  margin: 0 10px 0 0;
`;
const TodoLabel = styled.label`
  display: inline-block;
  text-decoration: ${props => (props.isCheck ? ' line-through' : 'none')};
`;
const TodoInput = styled.input`
  width: 100%;
  line-height: 25px;
  margin-right: 20px;
  padding: 0 10px;
`;
const Todo = ({ id, value, editTodo, delTodo }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const editTodolist = useCallback(
    e => {
      if (e.key === 'Enter') {
        editTodo({ id: id, value: editValue });
      }
    },
    [editTodo, isEdit, editValue, id]
  );

  return (
    <Li>
      <ul>
        <li>
          {isEdit ? (
            <TodoInput
              type="text"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onKeyDown={editTodolist}
            ></TodoInput>
          ) : (
            <>
              <CheckInput
                id={id}
                type="checkbox"
                onChange={() => setIsCheck(!isCheck)}
              />
              <TodoLabel htmlFor={id} isCheck={isCheck}>
                {value}
              </TodoLabel>
            </>
          )}
        </li>
      </ul>
      <ul>
        <li>
          <Button
            type="B"
            text={isEdit ? '확인' : '수정'}
            onClick={() => setIsEdit(!isEdit)}
          ></Button>
          <Button type="C" text="삭제" onClick={() => delTodo(id)}></Button>
        </li>
      </ul>
    </Li>
  );
};

export default Todo;
