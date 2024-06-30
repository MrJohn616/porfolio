type FooterProps = {
  p: string;
  ref1: string;
  a1: string;
  ref2: string;
  a2: string;
};

function Footer({ p, ref1, a1, ref2, a2 }: FooterProps) {
  return (
    <div className="footer">
      <div className="footer__content">
        <p>
          {p}{" "}
          <a href={ref1} target="_blank">
            {a1}
          </a>
          <a href={ref2} target="_blank">
            {a2}
          </a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
