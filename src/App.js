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
          <Route path="/home">
            <Home globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route path="/countries/">
            <Home globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route path="/states">
            <States data={statesData}></States>
          </Route>
          <Route path="/continents">
            <Continents data={continentsData}></Continents>
          </Route>
          <Route path="/zones">
            <Zones data={countryData}></Zones>
          </Route>
          <Route path="/search/:query/:search">
            <Search></Search>
          </Route>
          <Route exact path="/">
            <Home globalData={globalData} countryData={countryData}></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
