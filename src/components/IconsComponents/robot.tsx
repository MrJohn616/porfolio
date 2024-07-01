import { SVGProps } from "react";
interface PromptProps extends SVGProps<SVGSVGElement> {}

export default function Robot(props: PromptProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      className="icon icon-tabler icons-tabler-outline icon-tabler-robot"
      {...props}
    >
      <path stroke="none" d="M0 0h100v100H0z" />
      <path d="M25 25a8.33 8.33 0 0 1 8.33-8.33h33.33a8.33 8.33 0 0 1 8.33 8.33v16.67a8.33 8.33 0 0 1-8.33 8.33H33.33a8.33 8.33 0 0 1-8.33-8.33zM50 8.33v8.33M37.5 50v37.5M62.5 50v37.5M20.83 66.67l16.67-8.33M62.5 58.33l16.67 8.33M37.5 75h25M41.67 33.33v4.17M58.33 33.33v4.17" />
    </svg>
  );
}
