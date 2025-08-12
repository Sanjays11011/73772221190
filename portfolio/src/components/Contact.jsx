import React from 'react';

export function Contact() {
  return (
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <p className="muted max-600">
        Interested in collaborating or have an opportunity? Reach out — I’d love to hear from you.
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <div className="row end">
          <button type="submit" className="btn btn-primary">Send</button>
          <a className="btn btn-ghost" href="mailto:you@example.com">Email</a>
        </div>
      </form>
    </div>
  );
}