import React from "react";

type ButtonProps = {
  className?: string;
  buttons: { title: string; ref?: string; className?: string }[];
};

function Button({ className, buttons }: ButtonProps) {
  return (
    <>
      {buttons.map(
        (
          item: { title: string; ref?: string; className?: string },
          i: React.Key
        ) => (
          <button key={i} className={`btn ${className} ${item.className}`}>
            {item.className === "button-shadow-gradient" ? (
              <div className="gradient-overlay"></div>
            ) : null}
            <a href={item.ref} target="_blank">
              {item.title}
            </a>
          </button>
        )
      )}
    </>
  );
}
export default Button;
