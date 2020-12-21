import React from "react";
import "@fortawesome/react-fontawesome";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="footer-pad d-none d-lg-block">
                <h4>About me</h4>
                <p>
                  My name is Alberto Pérez and I am a beginner but with a lot of
                  desire to continue learning, improve the skills acquired and I
                  give everything to achieve the objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-2 text-center my-2">
              <h4>Follow Me</h4>
              <ul className="social-network social-circle">
                <li>
                  <a
                    href="https://linkedin.com/in/albertopga"
                    target={"_blank"}
                    rel="noreferrer"
                    title="Linkedin"
                    className={"linkedin"}
                  >
                    <i className={"linkedin"}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Albertopga"
                    target={"_blank"}
                    rel="noreferrer"
                    title="Github"
                    className={"github"}
                  >
                    <i className={"github"}>
                      <FontAwesomeIcon icon={faGithub} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">&copy; Copyright 2020 - APG.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
