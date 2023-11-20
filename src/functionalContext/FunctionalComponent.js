import React, { useContext } from 'react';
import { FunctionalContext } from './FunctionalContext';

const FunctionalComponent = () => {
  const context = useContext(FunctionalContext);

  return (
    <div>
      <p>Count: {context.count}</p>
      <button onClick={context.increment}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;