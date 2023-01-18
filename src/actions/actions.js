import { GET_DATA, PAGINATE_DATA } from './actionsTypes'

export const getPosts = (payload) => {
   return {
      type: GET_DATA,
      payload,
   }
}

export const paginate = () => {
   return {
      type: PAGINATE_DATA,
   }
}
