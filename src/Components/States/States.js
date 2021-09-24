import React, { useEffect } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";

const States = (props) => {
  const {data} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container pb-5 countries-div">
        <h2 className="text-center mt-4 mb-3 heading">STATES</h2>
        <div className="table-rs">
          <table className="table table-bordered">
            <thead className="sticky">
              <TableHeader
                name={"State"}
                tests={" "}
                testsPerOneMillion={" "}
              ></TableHeader>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((dt) => (
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
      </div>
    </>
  );
};

export default States;
