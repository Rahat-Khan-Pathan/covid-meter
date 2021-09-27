import React from "react";
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <button className="btn btn-primary px-4 py-3" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading
      </button>
    </div>
  );
};

export default Spinner;
