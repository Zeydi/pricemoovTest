export const LOADING_AGENCIES = 'agency:loadingAgencies';

import axios from 'axios'

  // Get Agencies

export function loadAgencies() {
  return (dispatch) => {
    axios.get('http://5ae97684531a58001414278c.mockapi.io/agencies').then(({ data }) => {
      dispatch({
        type: LOADING_AGENCIES,
        payload: data
      });
    }).catch(err => console.log(err));
  }
}
