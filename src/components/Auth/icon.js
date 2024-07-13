import React from 'react';

const icon = () => (
  <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
    />
  </svg>
);

export default icon;
//The path element within the SVG defines the shape of the icon.
//The fill attribute sets the color of the icon to the current text color (currentColor), making it adapt to the text color of its parent elements.
//The d attribute contains the path data, a string that defines the shape of the SVG path.