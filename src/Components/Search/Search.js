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
            (dt.Confirmed)? dt.NewCases = dt.Confirmed - prevCases : dt.NewCases=0;
            prevCases=dt.Confirmed;
            (dt.Deaths)? dt.NewDeaths = dt.Deaths - prevDeaths : dt.NewDeaths=0;
            prevDeaths = dt.Deaths;
            (dt.Recovered)? dt.NewRecovered = dt.Recovered - prevRecovered : dt.NewRecovered=0;
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
                            <td className={dt.NewCases>0 && "cases"}>{dt.NewCases}</td>
                            <td>{dt.Confirmed}</td>
                            <td className={dt.NewDeaths>0 && "deaths"}>{dt.NewDeaths}</td>
                            <td>{dt.Deaths}</td>
                            <td className={dt.NewRecovered>0 && "recovered"}>{dt.NewRecovered}</td>
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