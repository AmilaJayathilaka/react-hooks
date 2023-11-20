import React, { useState } from 'react';
import { FunctionalContext } from './FunctionalContext';
import FunctionalComponent from './FunctionalComponent';

const FunctionalProvider = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <FunctionalContext.Provider value={{ count, increment }}>
      <h3>Functional</h3>
      <FunctionalComponent/>
    </FunctionalContext.Provider>
  );
};

export default FunctionalProvider;