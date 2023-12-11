import React, { useState } from "react";

export default function Dropdown() {
  const [option, setOption] = useState();

  const [list] = useState(["Yes", "Probably Not"]);

  const [show, toggleShow] = useState(false);

  const dropDownList = list.map((item, index) => {
    return (
      <h4
        onClick={() => {
          setOption(item);
          toggleShow(false);
        }}
        key={index}
      >
        {item}
      </h4>
    );
  });

  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown">Should you use a dropdown? </label>

      <h3 className="result"> {option} </h3>

      <h2 className="dropdown-btn" onMouseEnter={() => toggleShow(!show)}>
        Select
      </h2>

      {show && <div className="options">{dropDownList}</div>}

      <button
        className="clear"
        onClick={() => {
          setOption("");
          toggleShow(false);
        }}
      >
        Clear
      </button>
    </div>
  );
}
