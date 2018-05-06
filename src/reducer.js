import {Map} from 'immutable';

// if this function is getting complicated we can separate it to core module just like on the server
function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}