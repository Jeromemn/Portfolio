import PropTypes from "prop-types";

const PlayCustom = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6432 12.848C20.2699 12.4564 20.2699 11.5437 19.6432 11.152L6.53 2.95627C5.86395 2.53999 5 3.01884 5 3.80427V20.1958C5 20.9812 5.86395 21.4601 6.53 21.0438L19.6432 12.848Z"
      fill={color}
    />
  </svg>
);

export default PlayCustom;
