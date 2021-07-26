import CoverBackground from "../../assets/cover.png";
import { Button, Main, Section, SectionTestimonials } from "./styles";

const Home = () => {
  const testimonials = [`“Ao longo desses anos do trabalho do CENEF, a gente às vezes costuma brincar, dizer pras pessoas,   que o CENEF acaba sendo uma residência como os médicos fazem, e realmente é um aprendizado imenso,  mas o foco não é esse, essa é uma consequência. O foco é o trabalho para a comunidade. Eu me dou   conta, ao longo desses anos, do quanto o CENEF já contribuiu e ainda vai contribuir pro   desenvolvimento, pra saúde da população de Joinville, pra comunidade joinvillense.
  É um trabalho muito bonito, único”. - Arlete Maria Corrêa, psicóloga e voluntária do CENEF há mais de 40 anos`, ]

  return (
    <>
      <Main>
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
            {testimonials.map(text => {
              return(<p>{text}</p>) 
            })}
          </div>
        </SectionTestimonials>
      </Main>
    </>
  );
};

export default Home;
