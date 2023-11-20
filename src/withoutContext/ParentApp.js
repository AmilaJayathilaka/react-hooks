// App.js
import React, {useState} from 'react';
import Lvl_1 from './Lvl_1';

const ParentApp = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  return (
    <div>
      <h1>Parent App without context - {user.name}</h1>
      <Lvl_1 user={user} />
    </div>
  );
};

export default ParentApp;
