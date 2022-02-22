import React from "react";
import Dashboard from "./Dashboard";

const BreedData = (props) => {
  return (
    <div className="breed-data">
      <div className="photo-container">
        <img
          src={props.breedInfo.image.url}
          alt="Placeholder"
          className="photo"
        />
      </div>
      <div className="right">
        <div className="text">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
        <Dashboard info={props.breedInfo} />
      </div>
    </div>
  );
};

export default BreedData;
