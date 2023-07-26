const UpArrow = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    
    style={{pointerEvents: "none", display: "block", width: "100%", height:" 100%"}}
  >
    <g >
      <path d="M18,9l-6,6L6,9H18z"  fill={color}></path>
    </g>
  </svg>
);

export default UpArrow;


