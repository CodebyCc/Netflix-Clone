import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <div className="footer-container">
      <div className="gridContainer">
        <div className="footer">
          <ul className="list">
            <li className="list-item">FAQ</li>
            <li className="list-item">Investor Relations</li>
            <li className="list-item">Privacy</li>
            <li className="list-item">Speed Test</li>
          </ul>
        </div>
        <div className="footer">
          <ul className="list">
            <li className="list-item">About</li>
            <li className="list-item">Jobs </li>
            <li className="list-item">Cookie Preferences</li>
            <li className="list-item">Legal Notices</li>
          </ul>
        </div>
        <div className="footer">
          <ul className="list">
            <li className="list-item">Account</li>
            <li className="list-item">Ways to Watch</li>
            <li className="list-item">Corporate Information</li>
            <li className="list-item">Recall info</li>
          </ul>
        </div>
        <div className="footer">
          <ul className="list">
            <li className="list-item">Media Center</li>
            <li className="list-item">Terms of Use</li>
            <li className="list-item">Contact Us</li>
          </ul>
        </div>
      </div>
      <p className="date">copyright ⓒ {d.getFullYear()}</p>
    </div>
  );
};

export default Footer;
