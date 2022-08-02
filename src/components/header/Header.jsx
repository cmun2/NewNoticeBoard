import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div>My TodoList</div>
      <div>React</div>
    </Container>
  );
};

const Container = styled.header`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 20px;
`;

export { Header };
