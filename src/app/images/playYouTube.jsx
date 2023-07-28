const PlayYouTube = ({ color, width, height }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
   
    width={width}
    height={height}
    fill={color}
    // style={{pointerEvents: "none", display: "block", }}
  >
    <g >
      <path d="M6,4l12,8L6,20V4z" ></path>
    </g>

  </svg>
);

export default PlayYouTube;