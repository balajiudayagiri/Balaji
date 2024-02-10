import React from "react";
import ColorDisplay from "../utiltyComponents/ColorsDisplay";

export default function ColorPage() {
  return (
    <div className="text-white">
      <h6 className=" text-4xl font-bold mb-7">
        Click on the reqiured color to copy it
      </h6>
      <p className="mb-7">these colors are collected through out my journey</p>
      <ColorDisplay />
    </div>
  );
}
