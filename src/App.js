import React from 'react';
import './style.css';
import Rend from './Rend';
import Change from './Change';
const App = () => {
  return (
    <div>
      <span>Display Time</span>
      <h3
        style={{
          backgroundColor: 'orange',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Rend />
      </h3>
      <Change />
    </div>
  );
};
export default App;
