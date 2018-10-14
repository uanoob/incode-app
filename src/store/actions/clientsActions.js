import axios from 'axios';

import {
  GET_CLIENTS,
  GET_CLIENT_BY_ID,
  SEARCH_CLIENTS,
  IS_FILTERED,
} from './types';

export const getClients = () => async dispatch => {
  const response = await axios.get(
    'https://incode-app.firebaseio.com/data.json',
  );
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};

export const getClientById = (clients, id) => {
  const result = clients.find(client => client.contact.phone === id);
  return {
    type: GET_CLIENT_BY_ID,
    payload: result,
  };
};

export const searchClients = (clients, regexp) => {
  const result = clients.filter(obj => {
    for (let key in obj) {
      if (filterClients(obj[key], regexp)) {
        return true;
      }
    }
  });
  // console.log(result);
  return {
    type: SEARCH_CLIENTS,
    payload: result,
  };
};

const filterClients = (object, regexp) => {
  const reg = new RegExp(`(?:^|\\s)${regexp}`, 'gi');
  for (let key in object) {
    if (object[key].match(reg)) {
      return true;
    }
  }
};

export const isFiltered = bool => {
  return {
    type: IS_FILTERED,
    payload: bool,
  };
};
