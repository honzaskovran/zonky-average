export const LOAD_RATING = 'load_rating',
             SET_RATING_AVERAGE = 'set_raing_average';

const INITIAL_STATE = { loading: false, averagePrice: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_RATING:
      return { ...state, loading: true, averagePrice: null };
    case SET_RATING_AVERAGE:
      return { ...state, loading: false, averagePrice: action.payload };
    default:
      return state;
  }
}
