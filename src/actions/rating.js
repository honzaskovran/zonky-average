import axios from 'axios';
import { LOAD_RATING, SET_RATING_AVERAGE } from '../reducers/rating';

const GET_MARKETPLACE_URL = 'https://api.zonky.cz/loans/marketplace';
const PROXY_URL = 'http://proxy.skovran.net';
const RESULT_SIZE = 100000;

export const findRating = (rating, name) => (
  dispatch => {
    dispatch({ type: LOAD_RATING, payload: name });

    axios.get(PROXY_URL, {
        params: {
          url: `${GET_MARKETPLACE_URL}?rating__eq=${rating}`
        },
        headers: {
          'X-Size': RESULT_SIZE
        }
      })
      .then(response => {
        dispatch({ type: SET_RATING_AVERAGE, payload: calculateAverage(response.data) });
      })
      .catch(error => {
        console.error(error);
      })
  }
);

const calculateAverage = loans => {
  let count = 0;

  loans.map(loan => count += loan.amount);

  return count/loans.length;
};