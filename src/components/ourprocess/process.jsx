import React from "react";
import { Calendar, Ruler, Scissors, Truck } from "lucide-react";
import "./process.css";

const steps = [
  {
    icon: <Calendar size={32} />,
    title: "Book a Consultation",
    description: "Schedule a session with our tailor to discuss your needs.",
  },
  {
    icon: <Ruler size={32} />,
    title: "Take Measurements",
    description: "We take precise body measurements for the perfect fit.",
  },
  {
    icon: <Scissors size={32} />,
    title: "Tailoring & Fitting",
    description: "We stitch and do fittings to ensure the garment suits you.",
  },
  {
    icon: <Truck size={32} />,
    title: "Delivery",
    description: "Get your finished outfit delivered or pick it up in-store.",
  },
];

const OurProcess = () => {
  return (
    <section className="our-process">
      <h2 className="section-title">The Threaded Path</h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
