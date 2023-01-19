import { Card, Button } from 'react-bootstrap'

const Post = ({ post, onShowModal }) => {
   return (
      <Card className="w-full hover:">
         <Card.Img variant="top" src={post.url} />
         <Card.Body>
            <Card.Title>{'Zero'}</Card.Title>
            <Card.Text>{post.title}</Card.Text>
            <div className="d-flex jsutify-content-end w-full">
               <Button variant="primary" onClick={onShowModal}>
                  Подробнее
               </Button>
            </div>
         </Card.Body>
      </Card>
   )
}

export default Post
