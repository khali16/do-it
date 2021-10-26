import React from "react";
import CompletedTodos from "../components/CompletedTodos";
import MainNavigation from "../components/NavBar/MainNavigation";
import NewTodos from "../components/NewTodos";
import Todos from "../components/Todos";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F1FDEB", height: "100vh" }}>
      <MainNavigation />
      <NewTodos />
      <Todos />
      <CompletedTodos />
    </div>
  );
};

export default MainPage;
