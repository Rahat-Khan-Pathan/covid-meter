import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import NotFound from './Components/NotFound/NotFound';
import States from './Components/States/States';
import Continents from './Components/Continents/Continents';

function App() {
  return (
    <>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home key="1"></Home>
          </Route>
          <Route exact path="/home">
            <Home key="1"></Home>
          </Route>
          <Route exact path="/countries/">
            <Home key="1"></Home>
          </Route>
          <Route exact path="/states">
            <States key="2"></States>
          </Route>
          <Route exact path="/continents">
            <Continents key="3"></Continents>
          </Route>
          <Route exact path="/search/:query/:search">
            <Search key="4"></Search>
          </Route>
          <Route path="*">
            <NotFound key="5"></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
