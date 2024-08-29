import React, { useEffect, useState } from "react";

const Testing = () => {
  const [test, setTest] = useState(1);
  useEffect(() => {
    console.log("testing use effect");
    setTest(test + 1);
  },[]);
  return <div>Testing </div>;
};

export default Testing;
