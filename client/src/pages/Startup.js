import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import InstallPWA from "../components/InstallPWA";

const Startup = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("/spinning")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, 1000);

    // this is a bit hacky, done to retain Blowfish Studio's provided artwork.
    // As not much time, I did adopted this method for a quick page change
    setTimeout(() => {
      window.location.href = window.location.origin + "/api";
    }, 3500);
  }, []);

  return (
    <>
    <InstallPWA />
      <div className="Startup">
        <header className="Startup-header">
          <img src={logo} className="Startup-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </>
  );
};

export default Startup;
