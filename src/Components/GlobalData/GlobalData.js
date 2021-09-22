
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import Chart from '../Chart/Chart';
import "./GlobalData.css";
import { useEffect, useState } from "react";

const GlobalData = (props) => {
  const [data,setData] = useState({cases:{},deaths:{},recovered:{}});
  const [vacData,setVacData] = useState( [ {daily:0} ] );
  const url='https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=all';
  const vacUrl = 'https://corona.lmao.ninja/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true';
  useEffect(()=> {
    fetch(url)
      .then((res) => res.json())
      .then((data) => checkData(data))
      .catch((er) => console.log(er));

      fetch(vacUrl)
      .then((res) => res.json())
      .then((data) => checkVacData(data))
      .catch((er) => console.log(er));
  },[url,vacUrl])
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
      setVacData([{daily:0}])};
  };
  let chartDates = Object.keys(data.cases);
  let chartCases = Object.values(data.cases);
  let chartDeaths = Object.values(data.deaths);
  const chartData = [];
  const chartVacData = [];
  for(let i=1;i<chartDates.length;i++) {
    chartData.push({name:chartDates[i],uv:(chartCases[i]-chartCases[i-1]<0)?0:chartCases[i]-chartCases[i-1],pv:(chartDeaths[i]-chartDeaths[i-1]<0)?0:chartDeaths[i]-chartDeaths[i-1]});
  }
  for(let i=0;i<vacData.length;i++)
  {
      chartVacData.push({name:vacData[i]?.date ,cv:vacData[i]?.daily});
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
  } = props.data;
  return (
    <div>
      <Chart key='chart' data={chartData} vacData={chartVacData}></Chart>
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
              tests={tests}
              testsPerOneMillion={testsPerOneMillion}
            ></TableBody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlobalData;
