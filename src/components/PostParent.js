import {
   Container,
   InputGroup,
   Form,
   Button,
   Row,
   Col,
   Pagination,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../asyncActions/posts'
import Post from './Post'
import { paginate, search } from '../actions/actions'
import ModalBlock from './Modal'

// Number of pagination
const items = [10, 20, 50]
let active = 10

// Parent Component
const PostParent = () => {
   const post = useSelector((state) => state.posts)
   const dispatch = useDispatch()
   const [value, setValue] = useState('')
   const [modalShow, setModalShow] = useState(false)

   // Getting all of Posts from API
   useEffect(() => {
      dispatch(fetchPosts())
   }, [])

   // Modal showing and closing
   const onModal = () => setModalShow(true)
   const onCloseModal = () => setModalShow(false)

   //Filter by searching
   const onSearch = (e) => {
      e.preventDefault()
      dispatch(search(value))
      // if (value !== '' || value.trim())
   }

   return (
      <Container>
         <Form onSubmit={onSearch}>
            <InputGroup className="mb-3">
               <Form.Control
                  placeholder="Search posts"
                  value={value}
                  onChange={({ target }) => setValue(target.value)}
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
                     <Post onShowModal={onModal} post={post} />
                  </Col>
               ))}
            </Row>
            <div className="d-flex justify-content-end">
               <Pagination>
                  {items.map((item, index) => (
                     <Pagination.Item active={item === active} key={index}>
                        {item}
                     </Pagination.Item>
                  ))}
               </Pagination>
            </div>
         </Container>
         <ModalBlock modalShow={modalShow} onCloseModal={onCloseModal} />
      </Container>
   )
}

export default PostParent
