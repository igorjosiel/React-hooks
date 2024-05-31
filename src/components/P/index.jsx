import { useContext } from 'react';
import { GlobalContext, actions } from '../../contexts/AppContext';

export const P = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <p onClick={() => dispatch({ type: actions.CHANGE_COUNTER })}>
      {state.body}
    </p>
  );
};
