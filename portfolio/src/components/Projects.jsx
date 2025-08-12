import React from 'react';

const projects = [
  {
    title: 'Neon UI Kit',
    desc: 'A component library with cyberpunk aesthetics and motion presets.',
    href: '#',
    tags: ['React', 'CSS', 'Motion'],
  },
  {
    title: 'Holo Dashboard',
    desc: 'Realtime analytics dashboard with 3D-like parallax and charts.',
    href: '#',
    tags: ['Vite', 'D3', 'WebGL'],
  },
  {
    title: 'AI Playground',
    desc: 'Interactive experiments with generative models and UI workflows.',
    href: '#',
    tags: ['AI', 'TypeScript', 'UX'],
  },
];

export function Projects() {
  return (
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="grid three">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="card project" target="_blank" rel="noreferrer">
            <div className="card-glow" aria-hidden="true" />
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}