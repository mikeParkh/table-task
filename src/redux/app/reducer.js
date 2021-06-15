import { 
  SET_FACTOR_A,
  SET_DATA,
} from './actions';

const initialState = {
  factorA: '',
  data: {},
}

const appReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_FACTOR_A: {
      return { ...state, factorA: action.factorA };
    }
    case SET_DATA: {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
}

export default appReducer;
