import React from "react";
import "./footer.css";

import FooterNavItem from "../component/FooterNavItem";

function Footer() {
  const locations = ["Lagos", "Abuja", "Abeokuta", "Ago"];
  const useFulLinks = ["Home", "Movie", "My List", "Terms of Service", "Privacy Policy"];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>Titans Cinema</span>
              </a>
              <p>
              CONNECT WITH US
              </p>
              <div className="social-links mt-3">
                <a href="/" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="/" className="github">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
              {useFulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Ago Iwoye <br />
                Ogun State <br />
                {/* <br /> */}
                <strong>Phone:</strong> 234567890
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{""}
          <strong>
            <span> Group 10 </span>
          </strong>
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
