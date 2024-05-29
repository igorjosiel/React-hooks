import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div';
import './App.css';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
