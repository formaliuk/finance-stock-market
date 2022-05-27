const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        quotes: action.payload,
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        hiddenItems: {
          ...state.hiddenItems,
          [action.payload]: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
