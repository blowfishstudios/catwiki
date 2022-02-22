/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LoadingSpinner from "../components/Loading";
import BreedData from "../components/BreedData";

const BreedInfo = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getResponse = async () => {
      const result = await fetch(`${window.location.pathname}`, {
        method: "GET",
      });

      const json = await result.json();

      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setInfo(json);
    };
    getResponse();
  }, []);

  console.log(info);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header />
      <BreedData breedInfo={info} />

    </>
  );
};

export default BreedInfo;
