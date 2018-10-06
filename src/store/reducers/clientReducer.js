import { GET_CLIENTS } from '../actions/types';

const initialState = {
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
