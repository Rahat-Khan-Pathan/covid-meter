import { useEffect } from "react";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import Spinner from "../Spinner/Spinner";

const Continents = (props) => {
  const {data} = props;
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <>
      { data.length ===0 ? <Spinner></Spinner> :
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
          </table>
        </div>
      </div>}
    </>
  );
};

export default Continents;
