import React from 'react';
import Lvl_3 from './Lvl_3';

const Lvl_2 = ({ user }) => (
  <div>
    <h3>Lvl_2</h3>
    <Lvl_3 user={user} />
  </div>
);

export default Lvl_2;
