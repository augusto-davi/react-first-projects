import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { FaPlayCircle } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FaPlayCircle />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
