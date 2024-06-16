







import * as React from 'react';
import { IconProps } from '../../../interface/IconProps';

export const GrowthUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" viewBox="0 0 96 96" id="grow-up" {...props} ref={forwardedRef}>
  <path stroke="#000" stroke-linecap="round" stroke-width="5" d="M80.1162 27.6553L82.759 18.1177C83.4226 15.7227 82.019 13.2431 79.624 12.5795L70.2583 9.98433"/>
  <rect width="7" height="32" x="13" y="54.666" fill="#1CE3E3" stroke="#000" stroke-width="5" rx="3.5"/>
  <rect width="7" height="38" x="34" y="48.666" fill="#1CE3E3" stroke="#000" stroke-width="5" rx="3.5"/>
  <rect width="7" height="44" x="55" y="42.666" fill="#1CE3E3" stroke="#000" stroke-width="5" rx="3.5"/>
  <rect width="7" height="50" x="76" y="36.666" fill="#1CE3E3" stroke="#000" stroke-width="5" rx="3.5"/>
  <path stroke="#000" stroke-linecap="round" stroke-width="5" d="M12.9999 40.4998L71.4999 20.4996"/>
</svg>

    );
  }
);

export default GrowthUpIcon;




