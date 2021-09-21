import React from 'react';
import './CountryData.css';

const CountryData = (props) => {
    const countries = props.countries;
    return (
        <div className="container pb-5 countries-div">
            <h2 className="text-center mt-4 mb-3 heading">COUNTRIES</h2>
            <table className="table table-bordered">
                <thead className="sticky">
                    <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Date</th>
                    <th scope="col">New Cases</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">New Deaths</th>
                    <th scope="col">Total Deaths</th>
                    <th scope="col">New Recovered</th>
                    <th scope="col">Total Recovered</th>
                    </tr>
                </thead>
                {
                    countries.map(country => 
                        <tbody>
                            <tr>
                            <td>{country.Country}</td>
                            <td>{(country.Date.split('T'))[0]}</td>
                            <td className={country.NewConfirmed>0 && "cases"}>{country.NewConfirmed}</td>
                            <td>{country.TotalConfirmed}</td>
                            <td className={country.NewDeaths>0 && "deaths"}>{country.NewDeaths}</td>
                            <td>{country.TotalDeaths}</td>
                            <td className={country.NewRecovered>0 && "recovered"}>{country.NewRecovered}</td>
                            <td>{country.TotalRecovered}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default CountryData;