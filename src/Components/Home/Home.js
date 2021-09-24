import Card from "../Card/Card";
import CountryData from "../CountryData/CountryData";
import GlobalData from "../GlobalData/GlobalData";

const Home = (props) => {
  const {globalData,countryData} = props;
  return (
    <>
      <Card key="card" pd={true} data={globalData}></Card>
      <GlobalData key="global" data={globalData}></GlobalData>
      <CountryData key="country" data={countryData}></CountryData>
    </>
  );
};

export default Home;
