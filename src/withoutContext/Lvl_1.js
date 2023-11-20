import React from 'react';
import Lvl_2 from './Lvl_2';

const Lvl_1 = ({ user }) => (
  <div>
    <h2>Lvl_1</h2>
    <Lvl_2 user={user} />
  </div>
);

export default Lvl_1;