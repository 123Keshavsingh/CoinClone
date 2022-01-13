import { FETCH_COINS } from "../actions";

const initialState = {
  coins: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        coins: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
