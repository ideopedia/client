import React from "react";

const Like = (props) => {
  return (
    <div >
      <svg
        width="70"
        height="70"
        viewBox="0 0 105 105"
        fill={props.inn}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2212_1222)">
          <circle cx="52.0223" cy="48.0223" r="37.0223" fill={props.out} />
        </g>
        <path
          d="M46.0404 36.4819C41.4161 36.4819 38.312 40.2247 38.312 44.8469C38.312 50.0926 45.6401 56.3597 51.9183 60.5444C58.1986 56.3597 65.4414 49.9919 65.5267 44.8469C65.6033 40.2247 62.6108 36.4819 57.9864 36.4819C56.0133 36.4819 54.0117 37.5254 51.9183 39.6166C49.8248 37.5254 48.0136 36.4819 46.0404 36.4819Z"
          stroke={props.stroke}
          stroke-width="3"
        />
        <defs>
          <filter
            id="filter0_d_2212_1222"
            x="0"
            y="0"
            width="104.044"
            height="104.044"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2212_1222"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2212_1222"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Like;
