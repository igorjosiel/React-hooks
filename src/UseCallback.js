import P from 'prop-types';
import React, { useState, useCallback } from 'react';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function UseCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai: ');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>

      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCallback;
