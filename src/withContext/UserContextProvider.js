import React, { useState } from 'react';
import UserContext from './UserContext';
import Lvl_1 from './Lvl_1';

const UserContextProvider = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });
  const [age, setAge] = useState(26);

  return (
    <UserContext.Provider value={{ user, setUser, age, setAge }}>
      <div>
        <h1>ParentApp with context - {user.name}</h1>
        <Lvl_1 />
      </div>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
