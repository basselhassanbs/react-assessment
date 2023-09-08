export const Reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        data: action.payload.products,
        total: action.payload.total,
      };
    case 'FETCH_USERS':
      return {
        ...state,
        data: action.payload.users,
        total: action.payload.total,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'CHANGE_ROWS_PER_PAGE':
      return {
        ...state,
        page: 1,
        rowsPerPage: action.payload,
      };
    default:
      return { ...state };
  }
};
