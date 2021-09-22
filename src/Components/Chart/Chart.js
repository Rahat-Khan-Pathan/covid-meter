import "./Chart.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useEffect } from "react/cjs/react.development";

export default function App(props) {
    useEffect(()=> {
        window.scrollTo(0, 0);
    },[]);
  const { data,vacData } = props;
  return (
    <div className="chart-container">
      <div>
        <AreaChart
          width={800}
          height={500}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="lightcyan" fill="steelblue" />
        </AreaChart>
        <h4 className="text-center mb-5">Affected Cases Growth Chart</h4>
        <AreaChart
          width={800}
          height={500}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="red" fill="orangered" />
        </AreaChart>
        <h4 className="text-center mb-5">Deaths Growth Chart</h4>
        <AreaChart
          width={800}
          height={500}
          data={vacData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="cv" stroke="green" fill="lightgreen" />
        </AreaChart>
        <h4 className="text-center mb-5">Vaccination Growth Chart</h4>
      </div>
    </div>
  );
}
