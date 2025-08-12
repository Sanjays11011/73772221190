import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Nav } from './components/Nav.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';

function useSectionObserver(sectionIds) {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Set active section when 40% visible
            if (entry.intersectionRatio > 0.4) {
              setActiveId(id);
            }
          }
        });
      },
      { root: null, threshold: [0.1, 0.4, 0.6, 0.9], rootMargin: '0px 0px -20% 0px' }
    );

    sections.forEach((el, index) => {
      // Staggered reveal using CSS variable
      el.style.setProperty('--reveal-delay-ms', `${index * 120 + 60}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default function App() {
  const sectionIds = useMemo(() => ['home', 'about', 'projects', 'contact'], []);
  const activeId = useSectionObserver(sectionIds);

  return (
    <div className="app-root">
      <Nav activeId={activeId} />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Your Name · Built with React + Vite</footer>
    </div>
  );
}