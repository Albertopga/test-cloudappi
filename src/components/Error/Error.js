import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Link className="btn btn-outline-secondary my-4 mx-4" to={"/"}>
        Back to home
      </Link>
      <section className={"text-center"} id="content">
        <h2>Page not Found</h2>
        <p>The page you are trying to access does not exist </p>
      </section>
    </>
  );
};

export default Error;
