const BackArrow = ({ color, width, height }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    color={color}
    width={width}
    height={height}  
  >
    <g >
      <path
        d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z"
      ></path>
    </g>
  </svg>
);

export default BackArrow;
