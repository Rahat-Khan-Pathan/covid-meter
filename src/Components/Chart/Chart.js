import "./Chart.css";
import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, vacData } = props;
  return (
    <>
      {data.length > 0 && (
        <div className="chart-container container">
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            <div className="col">
              <div className="card chart-card">
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="blue"
                      fill="steelblue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <h5 className="text-center mt-2">Affected Cases Growth Chart ({props.name})
                </h5>
              </div>
            </div>
            <div className="col">
              <div className="card chart-card">
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stroke="red"
                      fill="orangered"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <h5 className="text-center mt-2">Deaths Growth Chart  ({props.name})</h5>
              </div>
            </div>
            <div className="col">
              <div className="card chart-card">
                <ResponsiveContainer>
                  <AreaChart
                    data={vacData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 20,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="cv"
                      stroke="green"
                      fill="lightgreen"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <h5 className="text-center mt2">Vaccination Growth Chart  ({props.name})</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
