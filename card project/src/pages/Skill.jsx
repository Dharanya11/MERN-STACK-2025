import React, { useContext } from 'react';
import Context from '../hooks/Context';
const Skill = () => {
  const user = useContext(Context);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.ph}</h1>
    </div>
  );
}

export default Skill
