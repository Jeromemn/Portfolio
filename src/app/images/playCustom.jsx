import PropTypes from 'prop-types';

const PlayCustom = ({ color }) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.6432 10.848C15.2699 10.4564 15.2699 9.54369 14.6432 9.15203L1.53 0.956272C0.863949 0.539992 0 1.01884 0 1.80427V18.1958C0 18.9812 0.863951 19.4601 1.53 19.0438L14.6432 10.848Z" 
    stroke={color}
    fill={color}
    />
  </svg>
);

export default PlayCustom;