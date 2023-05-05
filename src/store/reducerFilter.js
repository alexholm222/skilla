const defaultState = {
    calls: [],
  };
  
  export const SET_FILTER = 'SET_FILTER';

  
  export function filterReduser(state = defaultState, action) {
    switch(action.type) {
      case SET_FILTER:
        return {...state, calls: action.payload}
      default: return state;  
    }
  };
  
  export function setFilter(payload) {
      return {
        type: SET_FILTER,
        payload
      }
    };