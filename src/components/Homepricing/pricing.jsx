import React from "react";
import "./pricing.css";

const suitPlans = [
  {
    title: "Classic Suits",
    price: 99,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
  {
    title: "Casual Suits",
    price: 155,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
  {
    title: "Tuxedo",
    price: 270,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>Individuality of your style.</h2>
      <p className="sub-heading">Best Quality Tailor</p>
      <p className="description">
        At vero eos et accusamus et justo odio ducimus qui blanditiis praesentium
        provident, similique sunt in culpa nea...
      </p>

      <div className="pricing-cards">
        {suitPlans.map((plan, index) => (
          <div key={index} className="card">
            <h3>{plan.title}</h3>
            <p className="price">
              <span className="amount">${plan.price}</span>
              <span className="monthly">/monthly</span>
            </p>
            <div className="dots">..</div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="purchase">Purchase</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
