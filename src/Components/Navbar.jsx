import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="flex justify-between items-center bg-amber-300 p-4">
      <button onClick={onMenuClick} className="text-2xl">
        <FaBars />
        
      </button>
      <h1 className="text-2xl font-bold">Food App</h1>



    </div>
  );
};

export default Navbar;
