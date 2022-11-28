import React from "react";
import kids from "../kids.png";
import tv from "../tv.png";
import mobile from "../mobile.jpg";

const Section = () => {
  return (
    <div className="section">
      <div class="block-dark grid grid--1x2 grid-pos border">
        <img className="img-cont" src={tv} alt="tv" />
        <div class="sectionContainer">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
      </div>
      <div class="block-dark grid grid--1x2 grid-pos border">
        <div class="sectionContainer">
          <h2>Watch everywhere.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <img className="img-cont" src={mobile} alt="kids" />
      </div>
      <div class="block-dark grid grid--1x2 grid-pos border">
        <div class="sectionContainer">
          <h2> Watch Everywhere</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>
      <div class="block-dark grid grid--1x2 grid-pos border">
        <div class="sectionContainer">
          <h2>Create profiles for kids.</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <img className="img-cont" src={kids} alt="kids" />
      </div>
    </div>
  );
};

export default Section;
