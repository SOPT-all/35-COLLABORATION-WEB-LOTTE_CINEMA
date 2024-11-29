import type { SVGProps } from 'react';

const SvgIcSeatDefaultSmall = ({ fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 3" {...props}>
    <path fill={fill} d="M0 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2H0z" />
  </svg>
);
export default SvgIcSeatDefaultSmall;
