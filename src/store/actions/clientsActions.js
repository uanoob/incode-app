import axios from 'axios';
import uuid from 'uuid/v1';

import { GET_CLIENTS, GET_CLIENT_BY_ID } from './types';

const localApi = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

export const getClients = () => async dispatch => {
  const response = await localApi.get('/data');
  response.data.map(client => (client.id = uuid()));
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};

export const getClientById = (clients, id) => {
  const result = clients.find(client => client.id === id);
  return {
    type: GET_CLIENT_BY_ID,
    payload: result,
  };
};
