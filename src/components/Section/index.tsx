import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, className, children }: SectionProps) {
  return (
    <section className={`section ${className}`} id={id}>
      {children}
    </section>
  );
}
export default Section;
