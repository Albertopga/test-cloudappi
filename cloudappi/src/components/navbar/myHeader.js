import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MyHeader = ({ search, setIdUser }) => {
  return (
    <div className="page-header p-3 mb-2 bg-info text-white d-flex justify-content-center">
      <h1>APG Technical Test</h1>
    </div>
  );
};

export default MyHeader;
