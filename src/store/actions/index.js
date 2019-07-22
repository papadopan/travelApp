import axios from 'axios';
/**
 * action types
 */
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';

/**
 * action functions
 */
export function requestStart() {
  return { type: LOADING_ON };
}
export function requestEnd() {
  return { type: LOADING_OFF };
}
export function logIn() {
  return { type: LOG_IN };
}
export function logOut() {
  return { type: LOG_OUT };
}
export function updateCountries(payload) {
  return {
    type: UPDATE_COUNTRIES,
    payload
  };
}

/**
 * Get country by region name
 */
export const fetchCountriesByRegion = name => async dispatch => {
  // start the loader
  dispatch(requestStart());

  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/region/${name}`);
    // update the state
    dispatch(updateCountries(response.data));
  } catch (error) {
    console.log('Error', error);
  }

  // end the loader
  dispatch(requestEnd());
};
