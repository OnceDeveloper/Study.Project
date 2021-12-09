import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';

const HeaderDiv = styled.div`
  h1 {
    text-align: center;
  }
`;
const AddDiv = styled.div`
  text-align: center;
`;
const AddInput = styled.input`
  width: 50%;
  line-height: 25px;
  margin-right: 20px;
  padding: 0 10px;
`;

const Header = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const addTodoTxt = useCallback(() => {
    if (value) {
      addTodo(value);
      setValue('');
    }
  }, [addTodo, value]);

  return (
    <HeaderDiv>
      <h1>To Do List</h1>
      <AddDiv>
        <AddInput
          type="text"
          placeholder="추가할 항목을 입력해주세요."
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') addTodoTxt();
          }}
        ></AddInput>
        <Button type="A" text="추가" onClick={addTodoTxt}></Button>
      </AddDiv>
    </HeaderDiv>
  );
};

export default Header;
