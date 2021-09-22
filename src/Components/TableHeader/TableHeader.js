import React from "react";

const TableHeader = (props) => {
  return (
    <tr>
      <th className={'display-'+ Boolean(props.name)} scope="col">{props.name}</th>
      <th scope="col">Date</th>
      <th scope="col">New Cases</th>
      <th scope="col">Total Cases</th>
      <th scope="col">New Deaths</th>
      <th scope="col">Total Deaths</th>
      <th scope="col">New Recovered</th>
      <th scope="col">Total Recovered</th>
      <th className={'display-'+ Boolean(props.tests)} scope="col">Total Tests</th>
      <th className={'display-'+ Boolean(props.testsPerOneMillion)} scope="col">Tests Per 1M</th>
      <th className={'display-'+ Boolean(props.details)} scope="col">Details</th>
    </tr>
  );
};

export default TableHeader;
