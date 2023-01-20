import { GET_POST } from '../actions/actionsTypes'

// State of store
const initialState = {
   posts: [],
   paginate: 10,
}

export const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_POST:
         return {
            ...state,
            posts: [...payload],
         }

      default:
         return state
   }
}
