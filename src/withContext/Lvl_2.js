import React, { useContext } from 'react';
import Lvl_3 from './Lvl_3';
import UserContext from './UserContext';

const Lvl_2 = () => {
  const { age, setAge } = useContext(UserContext);

  const increment = () => {
    setAge(age + 1);
  };

    return (
    <div>
      <h3>Lvl_2</h3>
       <button onClick={increment}>Increase Age</button>
      <Lvl_3 />
    </div>
    );
  };

export default Lvl_2;
