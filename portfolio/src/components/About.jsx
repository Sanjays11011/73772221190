import React from 'react';

export function About() {
  return (
    <div className="container">
      <h2 className="section-title">About</h2>
      <p className="muted max-600">
        I love solving complex problems with elegant UI systems, modern tooling, and thoughtful
        animations. My work blends clarity, speed, and a touch of neon flair.
      </p>
      <div className="grid three">
        <div className="card">
          <h3>Skills</h3>
          <ul>
            <li>React, TypeScript, Vite</li>
            <li>CSS Architecture, Tailwind, Framer Motion</li>
            <li>Accessibility, Performance</li>
          </ul>
        </div>
        <div className="card">
          <h3>Stack</h3>
          <ul>
            <li>Node, Express</li>
            <li>GraphQL/REST</li>
            <li>CI/CD, Docker</li>
          </ul>
        </div>
        <div className="card">
          <h3>Values</h3>
          <ul>
            <li>Craftsmanship</li>
            <li>Empathy</li>
            <li>Reliability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}