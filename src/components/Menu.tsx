import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <ul className="menu">
      <li className="menu-item">Home</li>
      <li className="menu-item">About</li>
      <li className="menu-item">Skill</li>
    </ul>
  );
};

export default Menu;