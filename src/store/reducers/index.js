import * as actions from '../actions';

const initialState = {
  loggedIn: true,
  loading: false,
  error: false,
  countries: [],
  country: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING_ON:
      return { ...state, loading: true };
    case actions.LOADING_OFF:
      return { ...state, loading: false };
    case actions.LOG_IN:
      return { ...state, loggedIn: true };
    case actions.LOG_OUT:
      return { ...state, loggedIn: false };
    case actions.UPDATE_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
}
