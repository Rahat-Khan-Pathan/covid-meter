import React from "react";
import Col from "../Col/Col";
import "./Card.css";

const Card = (props) => {
  const { cases, deaths, recovered, population, affectedCountries, critical } =
    props.data;
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mx-4 g-4 card-div">
        <Col name={"Total Affected Countries"} data={affectedCountries}></Col>
        <Col name={"Total Cases"} data={cases}></Col>
        <Col name={"Total Deaths"} className={"death"} data={deaths}></Col>
        <Col
          name={"Critical Cases"}
          className={"text-warning"}
          data={critical}
        ></Col>
        <Col
          name={"Total Recovered"}
          className={"recover"}
          data={recovered}
        ></Col>
        <Col name={"Population"} data={population}></Col>
      </div>
    </div>
  );
};

export default Card;
