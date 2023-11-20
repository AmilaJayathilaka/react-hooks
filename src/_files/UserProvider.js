import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }, ) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });
  const [age, setAge] = useState(26);

  return (
    <UserContext.Provider value={{ user, setUser, age, setAge }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
