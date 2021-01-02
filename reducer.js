export const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_NAME":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
