import React from 'react';

const Sidebar = ({ options }) => {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow-md">
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <a
              href={option.link}
              className="block p-2 rounded hover:bg-gray-200"
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
