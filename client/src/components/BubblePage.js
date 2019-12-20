import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [error, setError] = useState(null);
  // fetch your colors data from the server when the component mounts [x]
  // set that data to the colorList state property [x]

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
