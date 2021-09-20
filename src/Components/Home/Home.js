import React, { useEffect, useState } from 'react';
import CountryData from '../CountryData/CountryData';
import GlobalData from '../GlobalData/GlobalData';

const Home = () => {
    const [data,setData] = useState({Global:{NewConfirmed:'',TotalConfirmed:'',NewDeaths:'',TotalDeaths:'',NewRecovered:'',TotalRecovered:'',Date:''},Countries:[{NewConfirmed:'',TotalConfirmed:'',NewDeaths:'',TotalDeaths:'',NewRecovered:'',TotalRecovered:'',Date:'',Country:''}]});
    useEffect(()=> {
        fetch('https://api.covid19api.com/summary')
            .then(res=>res.json())
            .then(data=>setData(data))
    },[])
    return (
        <>
            <GlobalData key='global' global={data.Global}></GlobalData>
            <CountryData key='country' countries={data.Countries}></CountryData>
        </>
    );
};

export default Home;