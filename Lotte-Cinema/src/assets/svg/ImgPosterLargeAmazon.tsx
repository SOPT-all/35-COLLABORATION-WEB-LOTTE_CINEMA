import * as React from "react";
import type { SVGProps } from "react";

const SvgImgPosterLargeAmazon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 134 194"
    {...props}
  >
    <path
      fill="url(#img_poster_large_amazon_svg__a)"
      d="M0 4a4 4 0 0 1 4-4h126a4 4 0 0 1 4 4v190H0z"
    />
    <defs>
      <pattern
        id="img_poster_large_amazon_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#img_poster_large_amazon_svg__b"
          transform="matrix(.00094 0 0 .00065 -.007 0)"
        />
      </pattern>
      <image
        id="img_poster_large_amazon_svg__b"
        width={1075}
        height={1535}
      />
    </defs>
  </svg>
);
export default SvgImgPosterLargeAmazon;