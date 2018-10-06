import { GET_CLIENTS, GET_CLIENT_BY_ID } from '../actions/types';

const initialState = {
  data: [],
  client: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, data: action.payload };
    case GET_CLIENT_BY_ID:
      return { ...state, client: action.payload };
    default:
      return state;
  }
}
