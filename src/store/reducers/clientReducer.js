import {
  GET_CLIENTS,
  GET_CLIENT_BY_ID,
  SEARCH_CLIENTS,
  IS_FILTERED,
} from '../actions/types';

const initialState = {
  data: [],
  client: null,
  search: [],
  filter: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, data: action.payload };
    case GET_CLIENT_BY_ID:
      return { ...state, client: action.payload };
    case SEARCH_CLIENTS:
      return { ...state, search: action.payload };
    case IS_FILTERED:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
