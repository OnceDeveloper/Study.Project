import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 10px;
  border-bottom: 1px solid #c9c9c5;

  div:nth-child(1) {
    width: 80%;
  }
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
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
`;
const TodoLabel = styled.label`
  display: inline-block;
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: ${props => (props.isCheck ? ' line-through' : 'none')};
`;
const TodoInput = styled.input`
  width: 100%;
  line-height: 25px;
  margin-right: 20px;
  padding: 0 10px;
`;

const Todo = ({ id, value, editTodo, delTodo }) => {
  const [isCheck, setIsCheck] = useState(false); //checkbox 체크 여부
  const [isEdit, setIsEdit] = useState(false); //edit button 클릭 여부
  const [editValue, setEditValue] = useState(value); //수정한 todo value

  /**
   * isEdit-false : 수정 후 확인 버튼을 클릭한 경우 || 수정 후 input 값에서 Enter 입력한 경우
   * value : 현재 todo value 값
   * editValue : 수정한 todo value 값
   */
  useEffect(() => {
    if (!isEdit && value !== editValue) {
      editTodo({ id: id, value: editValue });
    }
  }, [isEdit]);

  return (
    <Li>
      <div>
        {isEdit ? (
          <TodoInput
            type="text"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                setIsEdit(!isEdit);
              }
            }}
          ></TodoInput>
        ) : (
          <>
            <CheckInput
              id={id}
              type="checkbox"
              onChange={() => setIsCheck(!isCheck)}
              checked={isCheck}
            />
            <TodoLabel htmlFor={id} isCheck={isCheck}>
              {value}
            </TodoLabel>
          </>
        )}
      </div>
      <div>
        <Button
          type="B"
          text={isEdit ? '확인' : '수정'}
          onClick={() => setIsEdit(!isEdit)}
        ></Button>
        <Button type="C" text="삭제" onClick={() => delTodo(id)}></Button>
      </div>
    </Li>
  );
};

export default Todo;
