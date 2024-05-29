import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const P = ({ children }) => {
  const {
    contextState: { body },
    setState,
  } = useContext(GlobalContext);

  return (
    <p
      onClick={() =>
        setState((state) => ({ ...state, counter: state.counter + 1 }))
      }
    >
      {body}
    </p>
  );
};
