import { ReactNode } from "react";

type BodyContentProps = {
  children: ReactNode;
};

function BodyContent({ children }: BodyContentProps) {
  return (
    <main className="main">
      <div className="main__content">{children}</div>
    </main>
  );
}
export default BodyContent;
