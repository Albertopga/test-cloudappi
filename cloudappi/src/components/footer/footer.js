import React from "react";
import "@fortawesome/react-fontawesome";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

//TODO: add icons and learn to use font awesome
const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Heading 1</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">Payment Center</a>
                  </li>
                  <li>
                    <a href="#">Contact Directory</a>
                  </li>
                  <li>
                    <a href="#">Forms</a>
                  </li>
                  <li>
                    <a href="#">News and Updates</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Follow Me</h4>
              <ul className="social-network social-circle">
                <li>
                  <a
                    href="https://linkedin.com/in/albertopga"
                    target={"_blank"}
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
              <p className="text-center">
                &copy; Copyright 2018 - Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="site-footer">
    //   <div className="container">
    //     <h6>About</h6>
    //     <p className="text-justify">
    //       Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
    //       the upcoming programmers with the code. Scanfcode focuses on providing
    //       the most efficient code or snippets as the code wants to be simple. We
    //       will help programmers build up concepts in different programming
    //       languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
    //       PHP, Android, SQL and Algorithm.
    //     </p>
    //   </div>
    //   <hr />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-8 col-sm-6 col-xs-12">
    //         <p className="copyright-text">22-12-2020 by Alberto Pérez.</p>
    //       </div>
    //       <div className="col-md-4">
    //         <ul className="social-icons">
    //           <li>
    //             <a
    //               className="linkedin"
    //               href="https://www.linkedin.com/in/albertopga/"
    //               target={"_blank"}
    //             >
    //               <i className="" />
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               className="github"
    //               href="https://github.com/Albertopga"
    //               target={"_blank"}
    //             >
    //               <i className="" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
