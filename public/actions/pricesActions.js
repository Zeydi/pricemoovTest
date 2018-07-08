export const LOADING_PRICES = 'prices:loadingPrices';

import axios from 'axios'

  // Get Prices

export function loadPrices(agency, category) {
  return (dispatch) => {
    axios.get(`http://5ae97684531a58001414278c.mockapi.io/agencies/${agency.id}/categories/${category.id}/prices`).then(({ data }) => {
      dispatch({
        type: LOADING_PRICES,
        payload: {
          data,
          category
        }
      });
    }).catch(err => console.log(err));
  }
}
