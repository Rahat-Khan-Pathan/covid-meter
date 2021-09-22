import React from "react";
import { Link } from "react-router-dom";
import "./TableBody.css";

const TableBody = (props) => {
  return (
    <tr>
      <td className={"flag-container display-" + Boolean(props.name)}> <img src={props.flag} className={"flag display-"+Boolean(props.flag)} alt="" /> {props.name}</td>
      <td>{(props.updated===undefined)?'Dinosaur':new Date(props.updated).toLocaleDateString()}</td>
      <td className={"cases-" + Boolean(props.todayCases > 0)}>
        {props.todayCases || 0}
      </td>
      <td>{props.cases || 0}</td>
      <td className={"deaths-" + Boolean(props.todayDeaths > 0)}>
        {props.todayDeaths || 0}
      </td>
      <td>{props.deaths || 0}</td>
      <td className={"recovered-" + Boolean(props.todayRecovered > 0)}>
        {props.todayRecovered || 0}
      </td>
      <td>{props.recovered || 0}</td>
      <td className={"display-" + Boolean(props.tests >= 0)}>{props.tests || 0}</td>
      <td className={"display-" + Boolean(props.testsPerOneMillion >= 0)}>
        {props.testsPerOneMillion || 0}
      </td>
      <td className={"display-" + Boolean(props.query)}>
        {
          <Link to={ (props.query + props.name) || ''}>
            <button className="btn btn-outline-secondary">Details</button>
          </Link>
        }
      </td>
    </tr>
  );
};

export default TableBody;
