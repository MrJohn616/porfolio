type SobreMiProps = {
  url: string;
  title: string;
  p1: string;
  strong1?: string;
  p11?: string;
  p2: string;
  strong2?: string;
  p22?: string;
  src: string;
  alt: string;
};

function SobreMi({
  url,
  title,
  p1,
  strong1,
  p11,
  p2,
  strong2,
  p22,
  src,
  alt,
}: SobreMiProps) {
  return (
    <div className="about__wrapper">
      <div className="about__content">
        <div className="about__title">
          <span style={{ backgroundImage: `url(${url})` }}></span>
          <h2>{title}</h2>
        </div>
        <p>
          {p1}
          <strong>{strong1}</strong>
          {p11}
        </p>
        <p>
          {p2} <strong>{strong2}</strong>
          {p22}
        </p>
      </div>
      <div className="about__img">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
export default SobreMi;
