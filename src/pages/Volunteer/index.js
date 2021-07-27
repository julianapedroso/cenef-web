import VolunteerImg from "../../assets/voluntario.png";
import { Image, Main, Section } from "./styles";
import emailjs from 'emailjs-com';

const Volunteer = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xst70r8', 'template_2tx0qih', e.target, "user_i9QlC7JPcpfAilNFerZnt")
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!")
      }, (error) => {
          alert("Nosso sistema está inoperante no momento, tente novamente mais tarde!")
          console.log(error.text)
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
            <input required type="text" name="name" placeholder="Nome" />
            <input required type="text" name="lastname" placeholder="Sobrenome" />
            <input required type="tel" name="phone" placeholder="Telefone com DDD" />
            <input required type="email" name="email" placeholder="Email" />
            <textarea required type="text" name="message" placeholder="Digite sua mensagem " />
            <button type='submit'>Enviar</button>
          </form>
        </div>
        
      </Section>
    </Main>
  );
};

export default Volunteer;
