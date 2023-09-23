const MobileMenuBurger = ({color, width, height}) => {
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
          d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
          
        ></path>
      </g>
    </svg>
  );
};

export default MobileMenuBurger;