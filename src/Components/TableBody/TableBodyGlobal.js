import React from "react";

const TableBodyGlobal = (props) => {
  return (
    <tr>
      <td>{new Date(props.updated).toLocaleDateString()}</td>
      <td className={"cases-" + (props.todayCases > 0)}>
        {props.todayCases || 0}
      </td>
      <td>{props.cases || 0}</td>
      <td className={"deaths-" + (props.todayDeaths > 0)}>
        {props.todayDeaths || 0}
      </td>
      <td>{props.deaths || 0}</td>
      <td className={"recovered-" + (props.todayRecovered > 0)}>
        {props.todayRecovered || 0}
      </td>
      <td>{props.recovered || 0}</td>
      <td>{props.tests || 0}</td>
      <td>{props.testsPerOneMillion || 0}</td>
    </tr>
  );
};

export default TableBodyGlobal;
