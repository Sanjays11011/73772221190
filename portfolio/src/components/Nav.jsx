import React from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Nav({ activeId }) {
  return (
    <header className="nav">
      <a className="brand" href="#home">&lt;TechNeon/&gt;</a>
      <nav className="nav-links">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={activeId === l.id ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}