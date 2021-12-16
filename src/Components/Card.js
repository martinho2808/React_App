// When developing bootstrap components that are just visual, you can still apply className to the div to apply the style.
// If the bootstrap Element uses JavaScript it might be easier to import the element like the file BootstrapElement/ the code below.
// You can follow the react-bootstrap documentation here: https://react-bootstrap.github.io/
import { Card, Button } from "react-bootstrap";

function RevisionCard(props) {
  return (
    <Card>
      <Card.Title>{props.name}</Card.Title>
      <Card.Title>{props.votes}</Card.Title>
      <Card.Body className="d-flex justify-content-center">
        <Button
          onClick={() => props.deleteItem(props.index)}
          variant="outline-danger"
        >
          Delete
        </Button>

        {/* Styling using class name as regular bootstrap */}
        <Button
          onClick={() => props.downvote(props.index)}
          className="m-1 btn btn-light btn-outline-dark"
        >
          Downvote
        </Button>
        <Button
          onClick={() => props.upvote(props.index)}
          variant="outline-success"
        >
          Upvote
        </Button>
      </Card.Body>
    </Card>
  );
}

export default RevisionCard;

// See if you can turn this into a class based component
