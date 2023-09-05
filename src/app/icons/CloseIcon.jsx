const CloseIcon = ({ color, width, height}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      width={width}
      height={height}
      fill={color}
    >
      <g >
        <path
          d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
        ></path>
      </g>
    </svg>
  );
};

export default CloseIcon;