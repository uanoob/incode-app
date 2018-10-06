import axios from 'axios';
import { GET_CLIENTS } from './types';

const localApi = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

export const getClients = () => async dispatch => {
  const response = await localApi.get('/data');
  // console.log(response.data);
  dispatch({
    type: GET_CLIENTS,
    payload: response.data,
  });
};
