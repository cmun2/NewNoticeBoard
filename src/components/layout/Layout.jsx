import React from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { Form } from "../form/Form";
import { List } from "../list/List";

const Layout = () => {
  //   const [todoList, setTodoList] = useState([]);
  //Form : input작성하는부분, List:반영되는부분, todos는 List안에, pages안에 있는것들은 다른 page로 넘어가게
  return (
    <Container>
      <Header />
      <Form />
      <List />
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
`;

export { Layout };
