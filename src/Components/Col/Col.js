import React from "react";
import CountUp from "react-countup";

const Col = (props) => {
  return (
    <>
      {props.data > 0 && (
        <div className="col">
          <div className="card black-card h-100">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className={"card-text cnt " + props.className}>
                <CountUp
                  start={0}
                  end={props.data}
                  duration="2"
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Col;
