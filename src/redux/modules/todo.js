import uuid from "react-uuid";

//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLESTATUS_TODO = "TOGGLESTATUS_TODO";
// const GETTODOBY_ID = "GETTODOBY_ID";

//Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLESTATUS_TODO, payload };
};

// export const getTodoById = (payload) => {
//   return { type: GETTODOBY_ID, payload };
// };

//Initial State
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: uuid(),
      title: "점심 먹기",
      body: "점심 뭐먹지...?",
      isDone: false,
    },
  ],
};
//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload.todo],
      };
    case DELETE_TODO:
      //   console.log(state);
      //   console.log(action.payload);
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLESTATUS_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    // case GETTODOBY_ID:
    //   return state;
    //   return {};
    default:
      return state;
  }
};

export { todos };
