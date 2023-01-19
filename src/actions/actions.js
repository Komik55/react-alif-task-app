import { GET_POST, PAGINATE_POST, SEARCH_POST } from './actionsTypes'

export const getPosts = (payload) => {
   return {
      type: GET_POST,
      payload,
   }
}

export const paginate = () => {
   return {
      type: PAGINATE_POST,
   }
}

export const search = (payload) => {
   return {
      type: SEARCH_POST,
      payload,
   }
}
