import React from "react";

const loader = () => {
  return (
    // <div className="loader-bg">
    //   <div className="loader-track">
    //     <div className="loader-fill" />
    //   </div>
    // </div>
    <div style={{ margin: "50px auto" }}>
      <svg
        version="1.1"
        id="L1"
        style={{
          width: " 100px",
          height: "100px",
          margin: "20px auto",
          display: "inline-block",
        }}
      >
        <circle
          fill="none"
          stroke="#4199d3"
          stroke-width="6"
          stroke-miterlimit="15"
          stroke-dasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          fill="none"
          stroke="#C3DDEE"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-dasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />{" "}
        </circle>
        <g fill="#4199d3">
          <rect x="30" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1"
            />
          </rect>
          <rect x="40" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2"
            />
          </rect>
          <rect x="50" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </rect>
          <rect x="60" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4"
            />
          </rect>
          <rect x="70" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.5"
            />
          </rect>
        </g>
      </svg>
    </div>
  );
};

export default loader;
