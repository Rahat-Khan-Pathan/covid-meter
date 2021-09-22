import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import Chart from "../Chart/Chart";
import "./GlobalData.css";
import { useEffect, useState } from "react";

const GlobalData = (props) => {
  const [data, setData] = useState({ cases: {}, deaths: {}, recovered: {} });
  const [vacData, setVacData] = useState([{ date: 0, daily: 100 }]);
  const url =
    "https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=all";
  const vacUrl =
    "https://corona.lmao.ninja/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => checkData(data))
      .catch((er) => console.log(er));

    fetch(vacUrl)
      .then((res) => res.json())
      .then((data) => checkVacData(data))
      .catch((er) => console.log(er));
  }, []);
  const checkData = (data) => {
    if (data.message === undefined) {
      setData(data);
    } else {
      setData({
        timeline: { cases: {}, deaths: {}, recovered: {} },
      });
    }
  };
  const checkVacData = (data) => {
    if (data.message === undefined) {
      setVacData(data);
    } else {
      setVacData([{ date: 0, daily: 100 }]);
    }
  };
  let chartDates = Object.keys(data?.cases);
  let chartCases = Object.values(data?.cases);
  let chartDeaths = Object.values(data?.deaths);
  const chartData = [];
  const chartVacData = [];
  for (let i = 1; i < chartDates.length; i++) {
    chartData.push({
      name: chartDates[i],
      uv:
        chartCases[i] - chartCases[i - 1] < 0
          ? 0
          : chartCases[i] - chartCases[i - 1],
      pv:
        chartDeaths[i] - chartDeaths[i - 1] < 0
          ? 0
          : chartDeaths[i] - chartDeaths[i - 1],
    });
  }
  for (let i = 0; i < vacData.length; i++) {
    chartVacData.push({ name: vacData[i]?.date, cv: vacData[i]?.daily });
  }
  const {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    tests,
    testsPerOneMillion,
  } = props?.data;
  return (
    <div>
      <div className="container search-div">
        <h2 className="text-center mt-4 mb-3 heading">GLOBAL</h2>
        <table className="table table-bordered">
          <thead>
            <TableHeader tests={" "} testsPerOneMillion={" "}></TableHeader>
          </thead>
          <tbody>
            <TableBody
              key={"global"}
              updated={updated}
              todayCases={todayCases}
              cases={cases}
              todayDeaths={todayDeaths}
              deaths={deaths}
              todayRecovered={todayRecovered}
              recovered={recovered}
              tests={tests || 0}
              testsPerOneMillion={testsPerOneMillion || 0}
            ></TableBody>
          </tbody>
        </table>
      </div>
      <Chart key="chart" name={'GLOBAL'} data={chartData} vacData={chartVacData}></Chart>
    </div>
  );
};

export default GlobalData;
