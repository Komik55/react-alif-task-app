import {
  GET_POST,
  LOADING,
  SET_FILTER,
  SET_FILTER_SORT,
  SET_PAGINATE,
} from "./actionsTypes";

export const getPosts = (payload) => {
  return {
    type: GET_POST,
    payload,
  };
};

export const setPaginate = (payload) => {
  return {
    type: SET_PAGINATE,
    payload,
  };
};

export const loading = (payload) => {
  return {
    type: LOADING,
    payload,
  };
};

export const filter = (payload) => {
  return {
    type: SET_FILTER,
    payload,
  };
};
