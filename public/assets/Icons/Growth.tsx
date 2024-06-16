




import * as React from 'react';
import { IconProps } from '../../../interface/IconProps';

export const GrowthIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" width="240" height="240" id="growth" {...props} ref={forwardedRef}>
  <g fill="none" fill-rule="evenodd">
    <path d="M0 0h240v240H0z"/>
    <rect width="20" height="115" x="175" y="80" fill="#E8F7FF" stroke="#46AAF7" stroke-width="10" rx="8"/>
    <rect width="20" height="80" x="135" y="115" fill="#E8F7FF" stroke="#46AAF7" stroke-width="10" rx="8"/>
    <rect width="20" height="60" x="95" y="135" fill="#E8F7FF" stroke="#46AAF7" stroke-width="10" rx="8"/>
    <rect width="20" height="30" x="55" y="165" fill="#E8F7FF" stroke="#46AAF7" stroke-width="10" rx="8"/>
    <path fill="#46AAF7" d="M30 190h180v10H30zM34.093 141.143 153.89 50.87l6.018 7.986L40.11 149.13z"/>
    <path fill="#46AAF7" d="M152.854 46h10v26h-10z"/>
    <path fill="#46AAF7" d="M162.999 46.07v10h-26v-10z"/>
  </g>
</svg>

    );
  }
);

export default GrowthIcon;




