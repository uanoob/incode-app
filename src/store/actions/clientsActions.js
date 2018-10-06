import axios from 'axios';
import uuid from 'uuid/v1';

import { GET_CLIENTS } from './types';

const localApi = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

export const getClients = () => async dispatch => {
  const response = await localApi.get('/data');
  response.data.map(client => (client.id = uuid()));
  // console.log(response.data);
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};
