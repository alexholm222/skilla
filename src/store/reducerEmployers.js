const defaultState = {
    employers: [],
  };
  
  export const SET_EMPLOYERS = 'SET_EMPLOYERS';
  
  export function employersReducer(state = defaultState, action) {
    switch(action.type) {
      case SET_EMPLOYERS:
        return {...state, employers: action.payload}
      default: return state;  
    }
  };
  
  export function setEmployers(payload) {
      return {
        type: SET_EMPLOYERS,
        payload
      }
    };