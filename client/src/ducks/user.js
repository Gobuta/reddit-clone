// Action types
const RECEIVE_USER_SESSION = 'RECEIVE_USER_SESSION';

// Action creators
const receiveUserSession = user => ({
  type: RECEIVE_USER_SESSION,
  user
});

const initialState = {
  session: {},
  isAuthenticated: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_SESSION:
      return {
        session: action.user,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
