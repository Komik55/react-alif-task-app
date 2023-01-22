import {
  InputGroup,
  Form,
  Button,
  Row,
  Col,
  Pagination,
  Container,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../asyncActions/posts";
import Post from "./Post";
import SkeletonCard from "./SkeletonCard";
import ModalBlock from "./Modal";
import { setPaginate } from "../actions/actions";

// List of pagination
const items = [10, 20, 50];

// Parent Component
const PostParent = () => {
  // Getting states from store
  const post = useSelector((state) => state.posts);
  const currentPaginate = useSelector((state) => state.paginate);
  const isLoad = useSelector((state) => state.isLoad);
  const dispatch = useDispatch();

  // Input value
  const [value, setValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  // state for getting info of single post
  const [modalPost, setModalPost] = useState({});
  // Filtered by checkbox
  const filterCheckbox = useSelector((state) => state.filter);
  const filtered =
    filterCheckbox.length === 0
      ? post.filter(
          ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
      : filterCheckbox.filter(
          ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );

  // Getting all of Posts from API
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // Modal showing and closing
  const onModal = (item) => {
    setModalPost(item);
    setModalShow(true);
  };

  const onCloseModal = () => setModalShow(false);
  //

  return (
    <div>
      <Container className="my-5">
        {!isLoad && (
          <Form onSubmit={(e) => e.preventDefault()}>
            <InputGroup className="mb-3 ">
              <Form.Control
                className="search bg-dark border-dark  text-light"
                placeholder="Search posts"
                value={value}
                onChange={({ target }) => setValue(target.value)}
              />
              <Button variant="primary" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </InputGroup>
          </Form>
        )}
        <div>
          <Row>
            {isLoad &&
              new Array(8).fill().map((_, id) => (
                <Col key={id} xs={12} sm={12} md={4} lg={4} className="mb-3">
                  <SkeletonCard />
                </Col>
              ))}
            {!isLoad &&
              filtered.map((post, id) => (
                <Col key={id} xs={12} sm={12} md={4} lg={4} className="mb-3 ">
                  <Post onShowModal={onModal} post={post} />
                </Col>
              ))}
            {filtered.length === 0 && !isLoad && (
              <div className="text-center text-light">Посты отсуствуют</div>
            )}
          </Row>
          {value === "" && (
            <div className="d-flex justify-content-end">
              <Pagination className="pagination">
                {items.map((item, index) => (
                  <Pagination.Item
                    key={index}
                    disabled={item === currentPaginate}
                    onClick={({ target }) => {
                      setValue("");
                      dispatch(setPaginate(parseInt(target.textContent)));
                      dispatch(fetchPosts());
                    }}
                  >
                    {item}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </div>
        <ModalBlock
          modalPost={modalPost}
          modalShow={modalShow}
          onCloseModal={onCloseModal}
        />
      </Container>
    </div>
  );
};

export default PostParent;
