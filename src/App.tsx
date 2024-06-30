import NavBar from "./components/NavBar";
import Section from "./components/Section";
import BodyContent from "./components/BodyContent";
import TopContent from "./components/TopContent";
import Proyects from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Footer from "./components/Footer";

const navbarItems = [
  {
    id: "contacto",
    title: "Contacto",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "sobreMi",
    title: "Sobre mí",
  },
];

const topContentItems = {
  src: "./img/yo96ppi-500x500.webp",
  alt: "Giovanni Gonzalez Ruiz",
  title: "Giovanni Gonzalez Ruiz",
  p1: "Programador especializado en el",
  p2: "Desarrollo de Aplicaciónes WEB",
  buttons: [
    {
      title: "Contactame",
      ref: "mailto:a351giova1nni385.francisco10@gmail.com",
    },
    { title: "LinkedIn", ref: "https://www.linkedin.com/in/giovanni616/" },
    {
      title: "Disponible para Trabajar",
      ref: "https://www.linkedin.com/in/giovanni616/",
      className: "button-shadow-gradient",
    },
  ],
};

const proyectsItems = {
  url: " ",
  headerText: "Proyectos",
  src: "./img/proyects-Apple.webp",
  alt: "Clone Apple WEB",
  title: "Clone - Home Page de Apple",
  label: [{ title: "React" }, { title: "Vite" }, { title: "Sass" }],
  description:
    "Página de bienvenida hecha desde cero tomando como referencia el diseño visual de la página. Creada con React y Vite. ",
  buttons: [
    { title: "Preview", ref: "https://mrjohn616.github.io/apple-page/" },
    { title: "Código", ref: "https://github.com/MrJohn616/apple-page" },
  ],
};

const sobreMiItems = {
  title: "Sobre mí",
  p1: "Desarrollador web front-end con una sólida base de conocimientos adquirida de forma autodidacta.",
  strong1:
    " He desarrollado habilidades en HTML, CSS, SASS, JavaScript y React ",
  p11: "a través de cursos en línea.",
  p2: "Soy un comunicador eficaz, trabajo bien en equipo y estoy siempre dispuesto a aprender. Busco una oportunidad para aplicar mis conocimientos en un entorno profesional y contribuir al desarrollo de productos web.",
  src: "./img/yo96ppi-500x500.webp",
  alt: "Giovanni Gonzalez Ruiz",
};

const footerItems = {
  p: "Porfolio inspirado en Proyecto de ",
  ref1: "https://github.com/midudev",
  a1: "midudev",
  ref2: "https://porfolio.dev/",
  a2: " porfolio.dev",
};

function App() {
  return (
    <>
      <div className="background">
        <div className="background--mask"></div>
      </div>
      <NavBar itemData={navbarItems}></NavBar>
      <BodyContent>
        <Section id="contacto">
          <TopContent
            src={topContentItems.src}
            alt={topContentItems.alt}
            title={topContentItems.title}
            p1={topContentItems.p1}
            p2={topContentItems.p2}
            buttons={topContentItems.buttons}
          ></TopContent>
        </Section>
        <Section id="proyectos">
          <Proyects
            url={proyectsItems.url}
            headerText={proyectsItems.headerText}
            src={proyectsItems.src}
            alt={proyectsItems.alt}
            title={proyectsItems.title}
            label={proyectsItems.label}
            description={proyectsItems.description}
            buttons={proyectsItems.buttons}
          ></Proyects>
        </Section>
        <Section id="sobreMi">
          <SobreMi
            title={sobreMiItems.title}
            p1={sobreMiItems.p1}
            strong1={sobreMiItems.strong1}
            p11={sobreMiItems.p11}
            p2={sobreMiItems.p2}
            src={sobreMiItems.src}
            alt={sobreMiItems.alt}
          ></SobreMi>
        </Section>
        <Footer
          p={footerItems.p}
          ref1={footerItems.ref1}
          a1={footerItems.a1}
          ref2={footerItems.ref2}
          a2={footerItems.a2}
        ></Footer>
      </BodyContent>
    </>
  );
}
export default App;
