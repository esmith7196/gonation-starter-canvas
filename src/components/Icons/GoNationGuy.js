import React from 'react';

const GoNationGuy = ({ color, height, width, style }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox='0 0 222 248'
    className='gonationManLogo'
    version='1.1'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M112.799 24.2763C112.799 10.8589 124.123 0 138.11 0C152.088 0 163.448 10.8947 163.452 24.2763C163.452 37.6937 152.096 48.5844 138.11 48.5844C124.123 48.5844 112.799 37.6937 112.799 24.2763ZM111.903 163.277L81.4795 198.508L5.89295 217.953L0 188.739L65.201 169.902L85.1998 138.969L97.4673 79.9671L88.1801 79.9671L67.3854 110.499C60.5533 119.71 50.8325 114.712 50.2874 114.279L48.4888 113.153C40.475 106.527 45.5603 97.8889 46.0855 97.1289L74.3568 55.6232L153.656 55.5715L172.509 91.3911L210.318 95.0558C210.318 95.0558 221.793 96.0227 221.722 107.852L221.575 109.508C218.678 120.709 207.7 119.356 207.7 119.356L156.274 114.354L145.849 95.0637L136.824 140.919L178.159 165.195L189.157 244.092L156.481 247.872L147.576 184.302L111.903 163.277Z'
      id='Shape'
      fill={color}
      fillRule='evenodd'
      stroke='none'
    />
  </svg>
);

GoNationGuy.defaultProps = {
  color: 'white',
  height: '16px',
  width: '16px',
};

export default GoNationGuy;
