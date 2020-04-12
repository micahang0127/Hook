import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div style={{ border:'solid 1px darkblue', padding:'20px'}}>
      <h2>[ useState ]</h2>
      <p>
        현재 카운터 값 :  <b>{value}</b> 
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;