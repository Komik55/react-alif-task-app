import { Card, Button } from "react-bootstrap";

const Post = ({ post, onShowModal }) => {
  return (
    <Card className="w-full h-100 card  bg-dark">
      <Card.Img variant="top" src={post.url} />
      <Card.Body className="bg-dark">
        <div className="d-flex justify-content-between text-light">
          <Card.Title>Post {post.id}</Card.Title>
          <Card.Title>{post.type}</Card.Title>
        </div>
        <Card.Text className="text-light">{post.title}</Card.Text>
        <div className="d-flex justify-content-end w-full">
          <Button
            variant="outline-info "
            className="text-light"
            onClick={() => onShowModal(post)}
          >
            Подробнее
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
