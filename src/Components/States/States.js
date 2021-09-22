import React, { useEffect, useState } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const States = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v3/covid-19/states")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((er) => {
        console.log(er);
      });
      window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container pb-5 countries-div">
      <h2 className="text-center mt-4 mb-3 heading">STATES</h2>
      <table className="table table-bordered">
        <thead className="sticky">
          <TableHeader
            name={"State"}
            tests={" "}
            testsPerOneMillion={" "}
          ></TableHeader>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((dt) => (
              <TableBody
                key={dt.state}
                name={dt.state}
                updated={dt.updated}
                todayCases={dt.todayCases}
                cases={dt.cases}
                todayDeaths={dt.todayDeaths}
                deaths={dt.deaths}
                todayRecovered={dt.todayRecovered}
                recovered={dt.recovered}
                tests={dt.tests}
                testsPerOneMillion={dt.testsPerOneMillion}
              ></TableBody>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default States;