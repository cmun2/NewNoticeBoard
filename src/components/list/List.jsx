import { useSelector } from "react-redux";
// import { deleteTodo } from "../../redux/modules/todo";
import { Todo } from "../todo/Todo";
import styled from "styled-components";

const List = () => {
  const { todos } = useSelector((state) => state.todos);
  //   const dispatch = useDispatch();

  //   const onDeleteHanlder = (todoId) => {
  //     dispatch(deleteTodo(todoId));
  //   };
  //console.log(todos.isDone);
  //console.log(todos);
  return (
    <ListContainer>
      <h2>일하는중..🔥</h2>
      <ListWrap>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} />;
          } else {
            return null;
          }
        })}
      </ListWrap>
      <h2>끝났다..🎉</h2>
      <ListWrap>
        {todos.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} />;
          } else {
            return null;
          }
        })}
      </ListWrap>
    </ListContainer>
  );
};

export { List };

const ListContainer = styled.div`
  padding: 0 24px;
  background-color: #ecfbfb;
`;

const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
