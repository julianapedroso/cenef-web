import CoverBackground from "../../assets/cover.png";
import { Button, Section, SectionTestimonials } from "./styles";

const Home = () => {
  return (
    <>
      <main>
        <Section>
          <img src={CoverBackground} alt="Pessoal da ong" />
          <h1>Quem Somos</h1>
          <p>
            O CENEF – Centro de Estudos e Orientação da Família é uma
            instituição filantrópica que, há mais de 40 anos, realiza
            atendimento terapêutico nas áreas de Psicologia e Psicopedagogia à
            comunidade em situação de vulnerabilidade social.
          </p>
          <Button>Saiba Mais</Button>
        </Section>
        <SectionTestimonials>
          <h1>Depoimentos</h1>
          <div>
            <p>
              Contribuir para o desenvolvimento humano saudável e para o
              fortalecimento de vínculos familiares e sociais através de ações
              multiprofissionais de promoção e prevenção.
            </p>
            <p>
              Contribuir para o desenvolvimento humano saudável e para o
              fortalecimento de vínculos familiares e sociais através de ações
              multiprofissionais de promoção e prevenção.
            </p>
            <p>
              Contribuir para o desenvolvimento humano saudável e para o
              fortalecimento de vínculos familiares e sociais através de ações
              multiprofissionais de promoção e prevenção.
            </p>
          </div>
        </SectionTestimonials>
      </main>
    </>
  );
};

export default Home;
