import React, { useEffect, useState } from "react";
import "../gradiantColors.css";
import FlippingCard from "../AnimatedComponents/FlippingCard/FlippingCard";
import CopyButton1 from "../AnimatedComponents/CopyButton1/CopyButton1";

const GradientDisplay = () => {
  const [gradientInfos, setGradientInfos] = useState([]);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const loadedGradients = [];

    for (let i = 0; i < 360; i++) {
      const gradient = rootStyles
        .getPropertyValue(`--gradient-background-${i}`)
        .trim();
      if (gradient) {
        loadedGradients.push({
          name: `--gradient-background-${i}`,
          gradient,
        });
      }
    }

    setGradientInfos(loadedGradients);
  }, []);


  return (
    <div className="flex flex-wrap gap-4 justify-between py-8 ">
      {gradientInfos.map((info, index) => (
        <FlippingCard
          className={"flex-grow m-2 rounded-md"}
          w={"250px"}
          key={`${index}-FlippingCard`}
          frontViewChild={
            <div
              style={{ backgroundImage: info.gradient }}
              className="w-full h-full"
            />
          }
          backViewChild={
            <div
              style={{ backgroundImage: info.gradient }}
              className="w-full h-full">
              <div>
                <CopyButton1 copyContent={info.gradient}/>
              </div>
            </div>
          }
        />

        // <div
        //   key={index}
        //   className="grow cursor-pointer border border-gray-600 rounded overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        //   onClick={() => copyToClipboard(info.gradient, info.name)}
        //   onMouseOut={handleMouseOut}>
        //   <div
        //     className="gradient w-full h-40 sm:h-32 md:h-40 lg:h-48 xl:h-56"
        //     style={{ backgroundImage: info.gradient }}>
        //     <span className="bg-black text-white p-2 h-fit rounded">
        //       {copiedGradient === info.name ? "Copied" : "Copy"}
        //     </span>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default GradientDisplay;
