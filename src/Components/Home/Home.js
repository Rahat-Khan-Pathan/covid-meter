import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CountryData from "../CountryData/CountryData";
import GlobalData from "../GlobalData/GlobalData";

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((er) => {
        console.log(er);
      });
      window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Card key="card" data={data}></Card>
      <GlobalData key="global" data={data}></GlobalData>
      <CountryData key="country"></CountryData>
    </>
  );
};

export default Home;
