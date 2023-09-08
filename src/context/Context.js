import React, { useReducer, useContext } from 'react';

import { Reducer } from './reducers/products';

const APPContext = React.createContext();

// const mainReducer = ({ products, users }, action) => ({
//   users: UserReducer(users, action),
//   products: ProductReducer(products, action),
// });

const APPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    data: [],
    page: 1,
    rowsPerPage: 5,
    total: 0,
    // users: {
    //   data: [],
    //   page: 1,
    //   rowsPerPage: 5,
    //   total: 0,
    // },
    // products: {
    //   data: [],
    //   page: 1,
    //   rowsPerPage: 5,
    //   total: 0,
    // },
  });

  return (
    <APPContext.Provider value={{ state, dispatch }}>
      {children}
    </APPContext.Provider>
  );
};

export default APPProvider;

export const UseAppContext = () => {
  return useContext(APPContext);
};
