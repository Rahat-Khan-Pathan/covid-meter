import React from "react";
import Zone from "../Zone/Zone";
import "./Zones.css";
import Spinner from "../Spinner/Spinner";

const Zones = (props) => {
  const { data } = props;
  const checkZone = (cases, population) => {
    const check = (cases * 100000) / population;
    return check.toFixed(2);
  };
  const redZoneData = data.filter(
    (dt) => checkZone(dt.todayCases, dt.population) >= 25
  );
  const sortedRed = redZoneData.sort(
    (a, b) =>
      checkZone(b.todayCases, b.population) -
      checkZone(a.todayCases, a.population)
  );
  const orangeZoneData = data.filter(
    (dt) =>
      checkZone(dt.todayCases, dt.population) >= 10 &&
      checkZone(dt.todayCases, dt.population) < 25
  );
  const sortedOrange = orangeZoneData.sort(
    (a, b) =>
      checkZone(b.todayCases, b.population) -
      checkZone(a.todayCases, a.population)
  );
  const yellowZoneData = data.filter(
    (dt) =>
      checkZone(dt.todayCases, dt.population) >= 1 &&
      checkZone(dt.todayCases, dt.population) < 10
  );
  const sortedYellow = yellowZoneData.sort(
    (a, b) =>
      checkZone(b.todayCases, b.population) -
      checkZone(a.todayCases, a.population)
  );
  const greenZoneData = data.filter(
    (dt) => checkZone(dt.todayCases, dt.population) < 1
  );
  const sortedGreen = greenZoneData.sort(
    (a, b) =>
      checkZone(b.todayCases, b.population) -
      checkZone(a.todayCases, a.population)
  );
  return (
    <>
      { data.length ===0 ? <Spinner></Spinner> :
        <div className="container zones-container">
        <div className="row row-cols-1 row-cols-lg-2 gy-5">
          <div className="col mb-5">
            <h2 className="text-center mb-3 heading">Red Zone Countries</h2>
            <Zone
              key={1}
              data={sortedRed}
              check={checkZone}
              variant="#a23520"
              color="red"
            ></Zone>
          </div>
          <div className="col mb-5">
            <h2 className="text-center mb-3 heading">Orange Zone Countries</h2>
            <Zone
              key={2}
              data={sortedOrange}
              check={checkZone}
              variant="#e38d2c"
              color="orange"
            ></Zone>
          </div>
          <div className="col">
            <h2 className="text-center mb-3 heading">Yellow Zone Countries</h2>
            <Zone
              key={3}
              data={sortedYellow}
              check={checkZone}
              variant="#efc637"
              color="yellow"
            ></Zone>
          </div>
          <div className="col">
            <h2 className="text-center mb-3 heading">Green Zone Countries</h2>
            <Zone
              key={4}
              data={sortedGreen}
              check={checkZone}
              variant="#51a09e"
              color="green"
            ></Zone>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Zones;
