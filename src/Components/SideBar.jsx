import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <ul className="p-4 space-y-4">
          <li className="hover:text-blue-500 cursor-pointer">Help</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Logout</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
