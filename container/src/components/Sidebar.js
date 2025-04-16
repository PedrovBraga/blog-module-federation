import React from 'react';

const Sidebar = ({ options }) => {
  return (
    <aside className="bg-light border-end vh-100 d-flex flex-column p-3 shadow-sm">
      <h5 className="text-primary mb-4">MyApp</h5>
      <ul className="nav flex-column">
        {options.map((option, index) => (
          <li key={index} className="nav-item mb-2">
            <a
              href={option.path}
              className="nav-link text-dark rounded py-2 px-3 d-flex align-items-center"
            >
              {/* Adicione ícones opcionais aqui, se necessário */}
              <span>{option.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
