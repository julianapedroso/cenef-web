import VolunteerImg from "../../assets/voluntario.png";
import { Image, Main, Section } from "./styles";
import emailjs from 'emailjs-com';
import { config } from 'dotenv'

config()

const Volunteer = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_80h12o8', 'template_e9qoe9e', e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

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
          <form onSubmit={sendEmail}>
            <input name="name" placeholder="Nome" />
            <input name="lastname" placeholder="Sobrenome" />
            <input name="phone" placeholder="Telefone" />
            <input name="email" placeholder="Email" />
            <textarea name="message" placeholder="Digite sua mensagem " />
            <button type='submit'>Enviar</button>
          </form>
        </div>
        
      </Section>
    </Main>
  );
};

export default Volunteer;
