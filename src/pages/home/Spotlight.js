import React from "react";

const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={`absolute pointer-events-none opacity-100 z-10 animate-spotlight ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 1400 3785 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1964.71"
          cy="273.501"
          rx="1934.71"
          ry="724.501"
          transform="matrix(5,100,10,10,-800,-4500)"
          fill={fill || "white"}
          fillOpacity="0.15"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="100%"
          height="140%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="90"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default Spotlight;
