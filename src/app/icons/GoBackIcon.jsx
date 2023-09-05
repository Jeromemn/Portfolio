const GoBackIcon = ({color, width, height}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      width={width}
      height={height}
      fill={color}
    >
      <g>
        <path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path>
      </g>
    </svg>
  );
};

export default GoBackIcon;
