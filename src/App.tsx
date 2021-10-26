import "./App.css";
import MainPage from "./pages/MainPage";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
