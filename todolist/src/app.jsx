import Header from './components/header';
import Todolist from './components/todolist';
import { useState } from 'react';
import styled from 'styled-components';

const SubContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #a6a6a6;
`;
function App() {
  const [todolist, setTodolist] = useState([
    { id: 0, value: '공부하기' },
    { id: 1, value: '수영하기' },
  ]);

  //추가
  const addTodo = value => {
    let isHaved = false;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].value === value) {
        isHaved = true;
        break;
      }
    }
    if (!isHaved) {
      let newId =
        todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 0;
      const resultTodo = [...todolist, { id: newId, value: value }];
      setTodolist(resultTodo);
    } else alert('이미 있는 항목입니다.');
  };

  //수정
  const editTodo = todoParam => {
    setTodolist(prevState => {
      const changeTodo = prevState.map(todo => {
        if (todo.id === todoParam.id)
          return { ...todo, value: todoParam.value };
        return todo;
      });
      return changeTodo;
    });
  };

  //삭제
  const delTodo = id => {
    const leftTodolist = todolist.filter(todo => todo.id !== id);
    setTodolist(leftTodolist);
  };
  return (
    <SubContainer>
      <Header addTodo={addTodo} />
      <Todolist todolist={todolist} editTodo={editTodo} delTodo={delTodo} />
    </SubContainer>
  );
}

export default App;
