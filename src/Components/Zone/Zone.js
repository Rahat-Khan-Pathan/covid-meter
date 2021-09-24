import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Zone.css";

const Zone = (props) => {
  const { data, check, variant ,color} = props;
  let mx = 0;
  data.map((dt) => {
    mx = Math.max(check(dt.todayCases, dt.population), mx);
  });
  const checkPer = (mxValue, crntValue) => {
    const ans = (crntValue / mxValue) * 100;
    return ans.toFixed(2);
  };
  return (
    <div className="overflow">
      {data &&
        data?.map((dt) => (
          <div>
            <div className="row mb-4 pe-4">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <img className="flag-img" src={dt.countryInfo.flag} alt="" />
              </div>
              <div className="col-10">
                <div className="d-flex justify-content-between">
                  <span>{dt.country}</span>
                  <span>{check(dt.todayCases, dt.population)} / 100,000</span>
                </div>
                <style type="text/css">
                  {`
                    .bg-${color} {
                    background-color: ${variant}
                    }
                    `}
                </style>
                <ProgressBar
                  key={dt.countryInfo.iso3}
                  variant={color}
                  now={checkPer(mx, check(dt.todayCases, dt.population))}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Zone;
