import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = ({ children }) => {
  const {
    contextState: { title, counter },
  } = useContext(GlobalContext);

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
