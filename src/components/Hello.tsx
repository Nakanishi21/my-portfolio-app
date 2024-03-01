import React from 'react';

const helloStyle = {
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
};

const Hello: React.FC = () => {
  return (
    <div style={helloStyle}>
      <h1>Hello!</h1>
      <p>Welcome to my portfolio.</p>
    </div>
  );
};

export default Hello;