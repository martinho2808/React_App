import { Button, Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

function CardExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
        
      <Button
        variant="primary"
        aria-controls="example-collapse-text"
        aria-expanded={open}
        onClick={() => {
          setOpen(!open);
        }}
        style={{ marginBottom: "1rem" }}
      >
                Toggle       
      </Button>
            
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card>
            <Card.Body style={{ color: "#000000" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                          magni, voluptas debitis similique porro a molestias consequuntur
                          earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
                          Minus, alias.           
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}
export default CardExample;
