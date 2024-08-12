import { SVGProps } from "react";
export const CodeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={30}
    height={30}
    fill="none"
    stroke="#CACDD4"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={7}
    className="icon icon-tabler icons-tabler-outline icon-tabler-code-dots"
    {...props}
  >
    <path stroke="none" d="M0 0h100v100H0z" />
    <path d="M62.5 50h.04M50 50h.04M37.5 50h.04M25 79.17a8.33 8.33 0 0 1-8.33-8.33v-16.67l-4.17-4.17 4.17-4.17V29.17a8.33 8.33 0 0 1 8.33-8.33M75 79.17a8.33 8.33 0 0 0 8.33-8.33v-16.67l4.17-4.17-4.17-4.17V29.17a8.33 8.33 0 0 0-8.33-8.33" />
  </svg>
);
