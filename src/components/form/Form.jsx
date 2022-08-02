import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todo";
//import { Todo } from "../todo/Todo";
import uuid from "react-uuid";

const Form = () => {
  const startState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(startState);

  //const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: uuid() });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo === "") return;

    dispatch(
      addTodo({
        todo,
      })
    );
    setTodo(startState);
  };

  return (
    <Container onSubmit={onSubmitHandler}>
      <InputContent>
        <FormLabel>제목</FormLabel>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <FormLabel>내용</FormLabel>
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </InputContent>
      <InputButton>추가하기</InputButton>
    </Container>
  );
};

export { Form };

const Container = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const InputContent = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const InputButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
  cursor: pointer;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
