import { Card, Button } from 'react-bootstrap'

const Post = ({ post }) => {
   return (
      <Card className="w-full">
         <Card.Img variant="top" src={post.url} />
         <Card.Body>
            <Card.Title>{'Zero'}</Card.Title>
            <Card.Text>{post.title}</Card.Text>

            <Button variant="primary float-right">Подробнее</Button>
         </Card.Body>
      </Card>
   )
}

export default Post
