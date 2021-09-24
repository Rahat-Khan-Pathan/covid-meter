import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";
import States from "./Components/States/States";
import Continents from "./Components/Continents/Continents";
import { useEffect, useState } from "react";
import Zones from "./Components/Zones/Zones";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [continentsData, setContinentsData] = useState([]);
  const [statesData, setStatesData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => setGlobalData(data))
      .catch((er) => {
        console.log(er);
      });

    fetch("https://corona.lmao.ninja/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((er) => {
        console.log(er);
      });

    fetch("https://corona.lmao.ninja/v3/covid-19/continents")
      .then((res) => res.json())
      .then((data) => setContinentsData(data))
      .catch((er) => {
        console.log(er);
      });

    fetch("https://corona.lmao.ninja/v3/covid-19/states")
      .then((res) => res.json())
      .then((data) => setStatesData(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home key="1" globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route exact path="/home">
            <Home key="1" globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route exact path="/countries/">
            <Home key="1" globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route exact path="/states">
            <States key="2" data={statesData}></States>
          </Route>
          <Route exact path="/continents">
            <Continents key="3" data={continentsData}></Continents>
          </Route>
          <Route exact path="/zones">
            <Zones key="6" data={countryData}></Zones>
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
