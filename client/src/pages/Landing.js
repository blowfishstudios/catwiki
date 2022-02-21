import React, { useState, useEffect } from "react";
import BreedSearch from "../components/BreedSearch";
import LoadingSpinner from "../components/Loading";

const Landing = () => {
  const [isLoading, setIsLoading] = useState([true]);
  const [names, setNames] = useState([""]);

  useEffect(() => {
    const getBreeds = async () => {
      const result = await fetch("/api", {
        method: "GET",
      }).then(setTimeout(() => setIsLoading(false), 2800));
      const json = await result.json();
      const breeds = json.map((cats) => cats.name);

      console.log(breeds);
      setNames(breeds);
    };
    getBreeds();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="homepage" style={{backgroundColor:"black"}}>
        <BreedSearch names={names} />
      </div>
    </>
  );
};

export default Landing;
