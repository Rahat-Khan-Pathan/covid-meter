import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Search.css';

const Search = () => {
    let {countryName} = useParams();
    countryName = countryName.toUpperCase();
    const [data,setData] = useState([{Confirmed:0,Deaths:0,Recovered:0,Date:' '}]);
    let prevCases = 0,prevDeaths = 0,prevRecovered = 0; 
    const url = 'https://api.covid19api.com/country/' + countryName;
    const [check,setCheck] = useState('');
    useEffect(()=> {
        fetch(url)
            .then(res=>res.json())
            .then(data=>reverse(data))
            .catch(err => {
                setCheck(countryName + '  Not Found!');
                setData([{Confirmed:'',Deaths:'',Recovered:'',Date:' '}]);
            })
    },[url]);
    const reverse = myData=> {
        myData?.map(dt => {
            if(dt.Confirmed===0) dt.Confirmed=prevCases;
            if(dt.Deaths===0) dt.Deaths=prevDeaths;
            if(dt.Recovered===0) dt.Recovered=prevRecovered;
            dt.NewCases = dt.Confirmed - prevCases;
            prevCases=dt.Confirmed;
            dt.NewDeaths = dt.Deaths - prevDeaths;
            prevDeaths = dt.Deaths;
            dt.NewRecovered = dt.Recovered - prevRecovered;
            prevRecovered = dt.Recovered;
        })
        myData.reverse();
        setData(myData);
        setCheck(countryName);
    }
    return (
        <div className="container search-div">
            <h2 className="text-center mt-4 mb-4 heading">COUNTRY: {check}</h2>
            <table className="table table-bordered">
                <thead className="sticky">
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">New Cases</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">New Deaths</th>
                    <th scope="col">Total Deaths</th>
                    <th scope="col">New Recovered</th>
                    <th scope="col">Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(dt=> 
                            <tr>
                            <td>{(dt.Date.split('T'))[0]}</td>
                            <td className="cases">{dt.NewCases}</td>
                            <td>{dt.Confirmed}</td>
                            <td className="deaths">{dt.NewDeaths}</td>
                            <td>{dt.Deaths}</td>
                            <td className="recovered">{dt.NewRecovered}</td>
                            <td>{dt.Recovered}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Search;