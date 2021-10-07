import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import NewTodos from "../components/NewTodos";
import Todos from "../components/Todos";

const MainPage = () => {
  return (
    <>
      <NewTodos />
      <Todos />
    </>
  );
};

export default MainPage;
