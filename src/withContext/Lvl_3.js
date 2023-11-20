import React, { useContext } from 'react';
import UserContext from './UserContext';

const Lvl_3 = () => {
  const { user, age } = useContext(UserContext);

  return (
    <div>
      <h4>Lvl_3</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age level 3: {age}</p>
    </div>
  );
};

export default Lvl_3;
