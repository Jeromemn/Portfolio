const VolumeIcon = ({ color, width, height }) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill={color}
    width={width}
    height={height}
    // style={{
    //   pointerEvents: "none",
    //   display: "block",
    //   width: "100%",
    //   height: "100%",
    // }}
    // stroke="none"
  >
    <g>
      <path d="M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z" fill={color}></path>
    </g>
  </svg>
);

export default VolumeIcon;
