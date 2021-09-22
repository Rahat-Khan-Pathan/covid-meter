import React, { useEffect, useState } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const Continents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v3/covid-19/continents")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <>
      <div className="container pb-5 countries-div">
        <h2 className="text-center mt-4 mb-3 heading">CONTINENTS</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="sticky">
              <TableHeader
                name={"Continents"}
                tests={" "}
                testsPerOneMillion={" "}
              ></TableHeader>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((dt) => (
                  <TableBody
                    key={dt.continent}
                    name={dt.continent}
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
      </div>
    </>
  );
};

export default Continents;
