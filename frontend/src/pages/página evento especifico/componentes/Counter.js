import React, { useState } from 'react';
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 0) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className = {styles.Container}>
      <button className = {styles.botao} onClick={decrementCount}>-</button>
      <span className = {styles.contador}>{count}</span>
      <button className = {styles.botao} onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
