export const LOADING_CATEGORIES = 'category:loadingCategories';

import axios from 'axios'

  // Get Categories

export function loadCategories(agency) {
  return (dispatch) => {
    axios.get(`http://5ae97684531a58001414278c.mockapi.io/agencies/${agency.id}/categories`).then(({ data }) => {
      const result = {
        data,
        agency
      }
      dispatch({
        type: LOADING_CATEGORIES,
        payload: result
      });
    }).catch(err => console.log(err));
  }
}
