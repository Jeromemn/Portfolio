const ForwardYouTube = ({ color, height, width }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    height={height}
    width={width}
    fill={color}
    focusable="false"
    
    // style={{pointerEvents: "none", display: "block", width: "100%", height:" 100%"}}
    // transform-origin="0px 0px"
    // style="pointer-events: none; display: block; width: 100%; height: 100%;"
  >
    <g >
      <path
        d="M5,18l10-6L5,6V18L5,18z M19,6h-2v12h2V6z"
        
      ></path>
    </g>
  </svg>
);

export default ForwardYouTube;
