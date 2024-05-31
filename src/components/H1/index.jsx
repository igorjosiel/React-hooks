import { useContext } from 'react';
import { GlobalContext, actions } from '../../contexts/AppContext';

export const H1 = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <h1 onClick={() => dispatch({ type: actions.CHANGE_TITLE })}>
      {state.title} {state.counter}
    </h1>
  );
};
