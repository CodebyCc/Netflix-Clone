import React from "react";
import "../index.css";

const Featured = () => {
  return (
    <div class="block">
      <div class="container">
        <h2>Unlimited Movies,Tv shows and more.</h2>
        <h3>Watch Anywhere.Cancel Anytime</h3>
      </div>
      <p className="mobile-paragraph">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <span class="input-btn">
        <input
          class="input"
          type="email"
          placeholder="Email address"
          required
        />
        <button class="btn btn-medium hero__btn">Get Started</button>
      </span>
    </div>
  );
};

export default Featured;
