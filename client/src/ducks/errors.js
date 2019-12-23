// Action types
const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
const CLEAR_ERROR = 'CLEAR_ERROR';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Action creators
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearError = error => ({
  type: CLEAR_ERROR,
  error
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return {
        ...state,
        ...action.errors
      };
    case CLEAR_ERROR:
      const { [action.error]: omit, ...res } = state;
      return res;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
