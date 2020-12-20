import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section id="content">
      <h2>Page not Found</h2>
      <p>
        The page you are trying to access does not exist{" "}
        <Link className="btn btn-outline-secondary my-4 mx-4" to={"/"}>
          Back to home
        </Link>
      </p>
    </section>
  );
};

export default Error;
