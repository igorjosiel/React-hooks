import { useState, useEffect } from 'react';
import './App.css';

function UseEffect() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', () => {
      console.log('Teste');
    });

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', () => {
        console.log('Teste');
      });
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Countador mudou para: ', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  );
}

export default UseEffect;
