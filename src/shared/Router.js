import React from "react";
import { Layout } from "../components/layout/Layout";
import { TodoList } from "../pages/TodoList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="todolist" element={<TodoList />}></Route>
        <Route path="todolist/:id" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
