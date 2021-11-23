import React from "react";
import { Card } from "react-bootstrap";

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
      <Card.Header style={center}>
        <h3>
          {props.address}, {props.district}
        </h3>
      </Card.Header>
      <Card.Body style={center}>
        <Card.Text>Number of infectant(s): {props.count}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CovidCard;
