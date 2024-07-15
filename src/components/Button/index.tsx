import React, { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  buttons: {
    icon: boolean;
    children?: ReactNode;
    url?: string;
    title: string;
    ref?: string;
    className?: string;
  }[];
};

export default function Button({ className, buttons }: ButtonProps) {
  return (
    <>
      {buttons.map(
        (
          item: {
            icon: boolean;
            children?: ReactNode;
            url?: string;
            title: string;
            ref?: string;
            className?: string;
          },
          i: React.Key
        ) => (
          <a
            href={item.ref}
            target="_blank"
            key={i}
            className={`btn ${className} ${item.className}`}
          >
            {item.className === "button-shadow-gradient" ? (
              <div className="gradient-overlay"></div>
            ) : null}
            {item.icon && <>{item.children}</>}
            <span>{item.title}</span>
          </a>
        )
      )}
    </>
  );
}
