import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  CHANGE_COUNTER: 'CHANGE_COUNTER',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: 'Qualquer coisa' };
    case actions.CHANGE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      break;
  }

  return { ...state };
};

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
