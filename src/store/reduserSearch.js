const defaultState = {
    searchData: {},
  };
  
  export const SET_SEARCH = 'SET_SEARCH';
 
  export function searchReduser(state = defaultState, action) {
    switch(action.type) {
      case SET_SEARCH:
        return {...state, searchData: action.payload}
      default: return state;  
    }
  };
  
  export function setSearch(payload) {
      return {
        type: SET_SEARCH,
        payload
      }
    };