import * as React from 'react';
import { IconProps } from '../../../interface/IconProps';

export const AnalyticsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="96" height="96" 
        fill="none" 
        viewBox="0 0 96 96" 
        id="analytics"
        {...props}
        ref={forwardedRef}
        >
        <path stroke="#000" stroke-linecap="round" stroke-width="5" d="M7 82H89"/>
        <path stroke="#000" stroke-width="5" d="M13 56C13 53.7909 14.7909 52 17 52V52C19.2091 52 21 53.7909 21 56V82H13V56zM33 43.5C33 41.0147 35.0147 39 37.5 39V39C39.9853 39 42 41.0147 42 43.5V82H33V43.5zM54 59C54 56.7909 55.7909 55 58 55V55C60.2091 55 62 56.7909 62 59V82H54V59zM74 70.5C74 68.0147 76.0147 66 78.5 66V66C80.9853 66 83 68.0147 83 70.5V82H74V70.5z"/>
        <path stroke="#000" stroke-linecap="round" stroke-width="5" d="M21.5 29L29.7018 23M73.7398 44.903L62 37L41 23"/>
        <circle cx="17" cy="32" r="4" stroke="#000" stroke-width="5"/>
        <circle cx="78.5" cy="47.5" r="4.5" stroke="#000" stroke-width="5"/>
        <circle cx="36.5" cy="19.5" r="5.5" stroke="#000" stroke-width="5"/>
      </svg>

    );
  }
);

export default AnalyticsIcon;



