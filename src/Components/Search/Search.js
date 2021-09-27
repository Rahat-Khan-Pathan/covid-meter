import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../Card/Card";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import Chart from "../Chart/Chart";
import "./Search.css";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const Search = () => {
  let { query, search } = useParams();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState({
    timeline: { cases: [0], deaths: [0], recovered: [0] },
  });
  const [vacData, setVacData] = useState({ timeline: [{ daily: 0 }] });
  const url = "https://corona.lmao.ninja/v3/covid-19/" + query + "/" + search;
  const myUrl = `https://corona.lmao.ninja/v3/covid-19/historical/${search}?lastdays=all`;
  const vacUrl = `https://corona.lmao.ninja/v3/covid-19/vaccine/coverage/countries/${search}?lastdays=all&fullData=true`;
  useEffect(() => {
    setData([]);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((er) => console.log(er));

    fetch(myUrl)
      .then((res) => res.json())
      .then((data) => checkData(data))
      .catch((er) => console.log(er));

    fetch(vacUrl)
      .then((res) => res.json())
      .then((data) => checkVacData(data))
      .catch((er) => console.log(er));

    window.scrollTo(0, 0);
  }, [url, myUrl, vacUrl]);
  const checkData = (data) => {
    if (data.message === undefined) {
      setAllData(data);
    } else {
      setAllData({
        timeline: { cases: [0], deaths: [0], recovered: [0] },
      });
    }
  };
  const checkVacData = (data) => {
    if (data.message === undefined) {
      setVacData(data);
    } else {
      setVacData({
        timeline: [{ daily: 0 }],
      });
    }
  };
  let dates = Object.keys(allData.timeline.cases);
  let cases = Object.values(allData.timeline.cases);
  let deaths = Object.values(allData.timeline.deaths);
  let recovered = Object.values(allData.timeline.recovered);
  let vacDataNew = Object.values(vacData.timeline);
  const chartData = [];
  const chartDataVac = [];
  for (let i = 1; i < recovered.length; i++) {
    chartData.push({
      name: dates[i],
      uv: cases[i] - cases[i - 1] < 0 ? 0 : cases[i] - cases[i - 1],
      pv: deaths[i] - deaths[i - 1] < 0 ? 0 : deaths[i] - deaths[i - 1],
    });
  }
  for (let i = 0; i < vacDataNew.length; i++) {
    chartDataVac.push({ name: vacDataNew[i].date, cv: vacDataNew[i]?.daily });
  }
  dates = dates.reverse();
  cases = cases.reverse();
  deaths = deaths.reverse();
  for (let i = 1; i < recovered.length; i++) {
    if (recovered[i] === 0) {
      recovered[i] = recovered[i - 1];
    }
  }
  recovered = recovered.reverse();
  let k = 1;
  dates.pop();
  dates.pop();
  return (
    <>
      {data.length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <div className="container search-div">
            <h2 className="text-center heading">
              {"COUNTRY"}: {search.toUpperCase()}{" "}
              {data.recovered === undefined ? " Not Found!" : ""}
            </h2>
          </div>
          <Card key="card" pd={false} data={data}></Card>
          <Chart
            key="chart"
            name={search.toUpperCase()}
            data={chartData}
            vacData={chartDataVac}
          ></Chart>
          <div className="container countries-div">
            <div className="table-rs">
              <table className="table table-bordered">
                <thead className="sticky">
                  <TableHeader></TableHeader>
                </thead>
                {dates.length > 0 &&
                  dates.map((dt) => (
                    <TableBody
                      key={dt}
                      updated={dt}
                      todayCases={
                        cases[k] - cases[k + 1] < 0
                          ? 0
                          : cases[k] - cases[k + 1]
                      }
                      cases={cases[k]}
                      todayDeaths={
                        deaths[k] - deaths[k + 1] < 0
                          ? 0
                          : deaths[k] - deaths[k + 1]
                      }
                      deaths={deaths[k]}
                      todayRecovered={
                        recovered[k] - recovered[k + 1] < 0
                          ? 0
                          : recovered[k] - recovered[k + 1]
                      }
                      recovered={recovered[k++]}
                    ></TableBody>
                  ))}
              </table>
            </div>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Search;
