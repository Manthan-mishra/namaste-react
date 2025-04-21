import React, { useState } from "react";
import "./About.css"; // Import the CSS

const faqs = [
  {
    question: "What is YummyDrop?",
    answer:
      "YummyDrop is your favorite food delivery service — delivering deliciousness to your doorstep, fast and fresh!",
  },
  {
    question: "How fast do you deliver?",
    answer:
      "We deliver within 30-45 minutes, depending on your location and restaurant.",
  },
  {
    question: "Do you support late-night orders?",
    answer:
      "Yes! We’re open till midnight, so your cravings never have to wait.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About YummyDrop 🍔</h1>
      <p className="about-subtitle">
        Where taste meets technology. We bring your favorite meals to your door
        — hot, fast, and with a smile!
      </p>

      <div className="card-section">
        <div className="info-card">
          <img src="https://i.imgur.com/eTmWoAN.png" alt="burger" />
          <h3>Fresh Ingredients</h3>
          <p>
            Only the best — hand-picked veggies, juicy meats, and fresh buns!
          </p>
        </div>
        <div className="info-card">
          <img src="https://i.imgur.com/DupGBz5.jpg" alt="delivery" />
          <h3>Lightning Delivery</h3>
          <p>Our riders zoom through traffic so you don’t have to wait!</p>
        </div>
        <div className="info-card">
          <img src="https://i.imgur.com/hGraGyR.jpg" alt="chef" />
          <h3>Expert Chefs</h3>
          <p>Made by the best — cooked with love and culinary passion.</p>
        </div>
      </div>

      <h2 className="faq-title">Frequently Asked Questions ❓</h2>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
