import Button from "../Button";

type ProyectsProps = {
  url: string;
  headerText: string;
  src: string;
  alt: string;
  title: string;
  label: { title: string }[];
  description: string;
  buttons: { title: string }[];
};

function Proyects({
  url,
  headerText,
  src,
  alt,
  title,
  label,
  description,
  buttons,
}: ProyectsProps) {
  return (
    <div className="proyects__wrapper">
      <div className="proyects__top">
        <span style={{ backgroundImage: `url(${url})` }}></span>
        <h2>{headerText}</h2>
      </div>
      <div className="proyects__body">
        <div className="proyects__img__wrapper">
          <img src={src} alt={alt} />
        </div>
        <div className="proyects__body__wrapper">
          <h3>{title}</h3>
          <div className="proyec__b__w__label">
            <Button buttons={label} className="btn--label"></Button>
          </div>
          <p>{description}</p>
          <div className="p__b__w__btns">
            <Button buttons={buttons} className="btn--normal"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyects;
