import './GlobalData.css';

const GlobalData = (props) => {
    const {NewConfirmed,TotalConfirmed,NewDeaths,TotalDeaths,NewRecovered,TotalRecovered,Date} = props.global;
    const newDate = (Date.split('T'));
    return (
        <div className="container search-div">
            <h2 className="text-center mt-4 mb-3 heading">GLOBAL</h2>
            <table className="table table-bordered">
                <thead>
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
                    <tr>
                    <td>{newDate[0]}</td>
                    <td className="cases">{NewConfirmed}</td>
                    <td>{TotalConfirmed}</td>
                    <td className="deaths">{NewDeaths}</td>
                    <td>{TotalDeaths}</td>
                    <td className="recovered">{NewRecovered}</td>
                    <td>{TotalRecovered}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GlobalData;