import * as actions from '../actions';

const initialState = {
  loggedIn: false,
  loading: false,
  error: false
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
    default:
      return state;
  }
}
