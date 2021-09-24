import Footer from "../Footer/Footer";
import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import "./CountryData.css";

const CountryData = (props) => {
  const {data} = props;
  return (
    <>
      <div className="container pb-5 countries-div">
        <h2 className="text-center mt-4 mb-3 heading">COUNTRIES</h2>
        <div className="table-rs">
          <table className="table table-bordered">
            <thead className="sticky">
              <TableHeader
                name={"Country"}
                tests={" "}
                testsPerOneMillion={" "}
                details={" "}
              ></TableHeader>
            </thead>
            <tbody>
              {data.length &&
                data.map((dt) => (
                  <TableBody
                    key={dt.country}
                    name={dt.country}
                    query={"/search/countries/"}
                    flag={dt.countryInfo.flag}
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
      <Footer></Footer>
    </>
  );
};

export default CountryData;
