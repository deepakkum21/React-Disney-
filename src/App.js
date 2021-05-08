import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/details/Detail";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
