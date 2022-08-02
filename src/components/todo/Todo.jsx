import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todo";
import { useNavigate } from "react-router-dom";
//import { TodoList } from "../../pages/TodoList";

const Todo = ({ todo }) => {
  //console.log(todo.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteHanlder = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const onEditHandler = (todoId) => {
    dispatch(toggleStatusTodo(todoId));
  };

  const onDetailHandler = (todo) => {
    navigate(`/todolist/${todo.id}`);
  };

  return (
    <Container>
      <TodoContainer>
        <TodoLabel>{todo.title}</TodoLabel>
        <div>{todo.body}</div>
        <ButtonSet>
          <ButtonDel onClick={() => onDeleteHanlder(todo.id)}>
            삭제하기
          </ButtonDel>
          <ButtonDone onClick={() => onEditHandler(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </ButtonDone>
          <ButtonDetail onClick={() => onDetailHandler(todo)}>
            상세보기
          </ButtonDetail>
        </ButtonSet>
      </TodoContainer>
    </Container>
  );
};

export { Todo };

const Container = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const TodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const TodoLabel = styled.label`
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const ButtonDel = styled.button`
  background-color: #fff;
  border: 2px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 33%;
`;

const ButtonDone = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 33%;
`;

const ButtonDetail = styled.button`
  background-color: #fff;
  border: 2px solid blueviolet;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 33%;
`;
