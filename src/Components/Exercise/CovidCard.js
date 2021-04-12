import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";

const CovidCard = (props) => {
  let style = {
    maxWidth: "18rem",
    margin: "1rem",
  };
  let center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <Card className="card text-white bg-secondary" style={style}>
      <CardHeader style={center}>
        <h3>
          {props.address}, {props.district}
        </h3>
      </CardHeader>
      <CardBody style={center}>
        <CardText>Number of infectant(s): {props.count}</CardText>
      </CardBody>
    </Card>
  );
};

export default CovidCard;
