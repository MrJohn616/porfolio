import { SVGProps } from "react";
interface PromptProps extends SVGProps<SVGSVGElement> {}

export default function prompt(props: PromptProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      className="icon icon-tabler icons-tabler-outline icon-tabler-prompt"
      {...props}
    >
      <path stroke="none" d="M0 0h100v100H0z" />
      <path d="M16.67 29.17l20.83 20.83-20.83 20.83M54.17 66.67h25" />
    </svg>
  );
}
