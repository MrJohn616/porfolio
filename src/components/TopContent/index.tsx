import Button from "../Button";

type TopContentProps = {
  src: string;
  alt: string;
  title: string;
  p1: string;
  p2: string;
  buttons: {
    icon: boolean;
    url?: string;
    title: string;
    ref?: string;
    className?: string;
  }[];
};

function TopContent({ src, alt, title, p1, p2, buttons }: TopContentProps) {
  return (
    <div className="section__wrapper">
      <div className="section__top">
        <img src={src} alt={alt} />
      </div>
      <div className="section__body">
        <h1>{title}</h1>
        <p>
          {p1} <strong>{p2}</strong>
        </p>
        <div className="section__btns">
          <Button buttons={buttons} className={`btn--medium`}></Button>
        </div>
      </div>
    </div>
  );
}
export default TopContent;
