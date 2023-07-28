const BackYouTube = ({ color, width, height }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width={width}
    height={height}
    // style={{pointerEvents: "none", display: "block"}}
    fill={color}
  >
    <g >
      <path
        d="M19,6L9,12l10,6V6L19,6z M7,6H5v12h2V6z"
        
      ></path>
    </g>
  </svg>
);

export default BackYouTube;
