import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../asyncActions/posts'
import Post from './Post'
import { paginate } from '../actions/actions'
//Filter by searching

const onSearch = (e) => {
   e.preventDefault()
   alert()
}

// Parent Component
const PostParent = () => {
   const post = useSelector((state) => state.posts)
   const dispatch = useDispatch()

   // Getting all of Posts from API
   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(paginate())
   }, [])

   return (
      <Container>
         <Form onSubmit={onSearch}>
            <InputGroup className="mb-3">
               <Form.Control
                  placeholder="Search posts"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
               />
               <Button variant="primary" type="submit">
                  Найти
               </Button>
            </InputGroup>
         </Form>
         <Container>
            <Row>
               {post.map((post, id) => (
                  <Col
                     key={id}
                     xs={12}
                     sm={12}
                     md={4}
                     lg={4}
                     className="mb-3 h-full"
                  >
                     <Post post={post} />
                  </Col>
               ))}
            </Row>
         </Container>
      </Container>
   )
}

export default PostParent
