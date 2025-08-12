import React from 'react';

export function Hero() {
  return (
    <div className="container hero">
      <div className="glow-orb" aria-hidden="true" />
      <h1 className="neon-title">
        Building <span className="accent">futuristic</span> web experiences
      </h1>
      <p className="muted">
        I am a frontend engineer crafting immersive, performant, and accessible interfaces with a
        focus on motion and delightful details.
      </p>
      <div className="cta-row">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-ghost">Contact Me</a>
      </div>
    </div>
  );
}