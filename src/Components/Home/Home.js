import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";
import CountryData from "../CountryData/CountryData";
import GlobalData from "../GlobalData/GlobalData";

const Home = (props) => {
  const { globalData, countryData } = props;
  return (
    <>
      { globalData.length ===0 ? <Spinner></Spinner> :
        <div>
          <Card key="card" pd={true} data={globalData}></Card>
          <GlobalData key="global" data={globalData}></GlobalData>
          <CountryData key="country" data={countryData}></CountryData>
        </div>
      }
    </>
  );
};

export default Home;
