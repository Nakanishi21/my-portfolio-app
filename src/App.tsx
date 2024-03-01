import React from 'react';
import Hello from './components/Hello';
import Menu from './components/Menu';

const App: React.FC = () => {
  return (
    <div>
      <h1>My TypeScript React App</h1>
      <Hello />
      <Menu />
    </div>
  );
};

export default App;