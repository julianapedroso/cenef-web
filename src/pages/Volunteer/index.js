import VolunteerImg from "../../assets/voluntario.png";
import { Image, Main, Section } from "./styles";

const Volunteer = () => {
  return (
    <Main>
      <Section>
        <Image src={VolunteerImg} alt="Mãos simbolizando doação" />
        <div>
          <h1>Seja um voluntário</h1>
          <div>
            <p>
              Todo o trabalho realizado pelo CENEF só é possível com a ajuda de
              um time de voluntários.
            </p>
            <p>Quer fazer parte? Entre em contato conosco:</p>
          </div>
          <form>
            <input placeholder="Nome" />
            <input placeholder="Sobrenome" />
            <input placeholder="Telefone" />
            <input placeholder="Email" />
            <textarea placeholder="Digite sua mensagem " />
            <button>Enviar</button>
          </form>
        </div>
        
      </Section>
    </Main>
  );
};

export default Volunteer;
