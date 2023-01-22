import {
  GET_POST,
  LOADING,
  SET_FILTER,
  SET_PAGINATE,
} from "../actions/actionsTypes";

// State of store
const initialState = {
  posts: [],
  filter: [],
  paginate: 10,
  isLoad: true,
};

// Adding types to each item for filtering by type
const typeList = ["sport", "music", "science"];

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get all of post and and specific type for each post
    case GET_POST:
      return {
        ...state,
        posts: [...payload].map((item) => ({
          ...item,
          type: typeList[Math.floor(Math.random() * typeList.length)],
        })),
      };

    case LOADING:
      return {
        ...state,
        isLoad: payload,
      };

    // Change pagination
    case SET_PAGINATE:
      return {
        ...state,
        paginate: payload,
      };

    // Make Filter
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};
