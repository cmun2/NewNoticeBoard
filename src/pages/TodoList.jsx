import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";

const TodoList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Todo] = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.id === id.toString())
  );
  console.log(Todo);
  //console.log(param);
  //console.log(todos.list);
  //const [data, setData] = useState();
  //console.log(todos);
  return (
    <Container>
      <h1>오늘의 스케쥴</h1>
      id:{id}
      <div>title:{Todo.title}</div>
      <div>body:{Todo.body}</div>
      <DetailButton
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </DetailButton>
    </Container>
  );
};

export { TodoList };

const Container = styled.div`
  background-color: teal;
  width: 50vh;
  height: 80vh;
  display: flex;
  border: 4px solid blanchedalmond;
  padding: 40px;
  align-items: top;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: white;
`;

const DetailButton = styled.div`
  background-color: yellow;
  height: 40px;
  cursor: pointer;
  border: 2px solid blueviolet;
  border-radius: 8px;
  width: 33%;
  color: red;
  font-weight: bold;
`;
