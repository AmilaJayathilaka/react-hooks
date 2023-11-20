import React, { useContext } from 'react';
import Lvl_2 from './Lvl_2';
import UserContext from './UserContext';

const Lvl_1 = () => {
  const { user, age } = useContext(UserContext);

  return (
    <div>
      <h2>Lvl_1</h2>
      <p>Age level 1: {age}</p>
      <Lvl_2 />
    </div>
  );
};

export default Lvl_1;
