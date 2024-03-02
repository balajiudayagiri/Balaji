import React, { useState, useRef } from "react";

import Preview from "./Preview";
import Configuration from "./Configuration";

const Neumorphism = () => {
  const [activeLightSource, setActiveLightSource] = useState(1);
  const previewBox = useRef();

  return (
    <div className="border border-gray-600">
      <Preview
        setActiveLightSource={setActiveLightSource}
        previewBox={previewBox}
      />
      <Configuration
        previewBox={previewBox}
        activeLightSource={activeLightSource}
      />
    </div>
  );
};

export default Neumorphism;
