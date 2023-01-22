import { Offcanvas, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { filter } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

// All checboxes list
const filterText = ["Music", "Sport", "Science"];

const Filter = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  // Getting posts by store
  const posts = useSelector((state) => state.posts);
  const [types, setTypes] = useState([]);

  const [checkboxes, setCheckboxes] = useState({
    music: false,
    sport: false,
    science: false,
  });

  const handleChange = ({ target }) => {
    if (target.checked) {
      setTypes((prev) => [...prev, target.value]);
    } else {
      setTypes((prev) => prev.filter((item) => !item.includes(target.value)));
    }

    // Dyncamic changing of states
    setCheckboxes((prev) => {
      const lowerTargetName = target.value.toLowerCase();
      return {
        ...prev,
        [lowerTargetName]: !prev[lowerTargetName],
      };
    });
  };

  // Filter for tags by posts
  const filteredPosts = posts.filter((post) => {
    return types.some((filter) => post.type.includes(filter));
  });

  useEffect(() => {
    dispatch(filter(filteredPosts));
  }, [types]);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Фильтр</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {filterText.map((item, id) => (
              <Form.Check
                checked={checkboxes[item.toLowerCase()]}
                onChange={handleChange}
                value={item.toLowerCase()}
                key={id}
                type={"checkbox"}
                label={item}
              />
            ))}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Filter;
