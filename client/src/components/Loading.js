import React from "react";
import Spinner from "../assets/loading.gif";

const Loading = () => {
  return (
    <>
    <div
      className="loading"
      style={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        alignItems: "center",
        padding: "25% 0",
        borderRadius: "1rem",
        height: "25%",
        margin: "0 0 50%",
      }}
    >
      <h1 style={{ padding: "0 2rem" }}>
        Getting the information ready for you...
      </h1>
      <img
        src={Spinner}
        style={{
          width: "50vw",
          height: "auto",
          maxWidth: "20rem",
        }}
        alt="Cat creeping"
      />
    </div>
    </>
  );
};

export default Loading;
