import { SVGProps } from "react";

export const AppWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={30}
    height={30}
    fill="none"
    stroke="#CACDD4"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={8}
    className="icon icon-tabler icons-tabler-outline icon-tabler-app-window"
    {...props}
  >
    <path stroke="none" d="M0 0h100v100H0z" />
    <path d="M12.5 29.17a8.33 8.33 0 0 1 8.33-8.33h58.33a8.33 8.33 0 0 1 8.33 8.33v41.67a8.33 8.33 0 0 1-8.33 8.33H20.83a8.33 8.33 0 0 1-8.33-8.33zM25 33.33h.04M37.5 33.33h.04" />
  </svg>
);
