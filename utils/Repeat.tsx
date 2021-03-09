import React from 'react';

const Repeat: React.FC<{ times: number }> = ({ children, times }) => {
  const retVal = [];
  for (let i = 0; i < times; i++) {
    retVal.push(children);
  }

  return <>{retVal}</>;
};

export default Repeat;
