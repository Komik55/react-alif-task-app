import { Card, Placeholder } from "react-bootstrap";
const SkeletonCard = () => {
  return (
    <Card className="bg-dark">
      <Placeholder xs={12} className="bg-light" style={{ height: "350px" }} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} className="bg-light" />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} className="bg-light" />{" "}
          <Placeholder xs={4} className="bg-light" />{" "}
          <Placeholder className="bg-light" xs={4} /> <Placeholder xs={6} />{" "}
          <Placeholder xs={8} className="bg-light" />
        </Placeholder>
        <div className="d-flex justify-content-end">
          <Placeholder.Button variant="info" xs={5} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SkeletonCard;
