import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact YummyDrop 🍕</h1>
        <p>
          Questions? Feedback? Craving something? <br />
          Let us know — we're here to spice things up! 🌶️
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Tell us what's on your mind..."
            required
          ></textarea>

          <button type="submit">Send Message 🚀</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
