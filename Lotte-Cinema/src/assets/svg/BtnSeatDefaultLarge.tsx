import type { SVGProps } from 'react';

interface SvgSeatsProps extends SVGProps<SVGSVGElement> {
  seat: string;
}

const SvgBtnSeatDefaultLarge = ({ seat, ...props }: SvgSeatsProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 21" {...props}>
    <path fill="#1EAFFD" d="M0 8a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v10a3 3 0 0 1-3 3H0z" />
    <path fill="#fff" d="M9 3h10v1H9z" />
    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#ffffff">
      {seat}
    </text>
  </svg>
);
export default SvgBtnSeatDefaultLarge;
