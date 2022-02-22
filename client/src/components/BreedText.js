import React from "react";

const Text = ({ name, description }) => {
  return (
    <div className="text">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Text;
