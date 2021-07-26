import PixCenef from "../../assets/pix_cenef.jpeg";
import Donate from "../../assets/doador.png";
import { Image, Main, Section } from "./styles";

const Donations = () => {
  return (
    <Main>
      <Section>
        <div>
          <h1>Ajude o CENEF!</h1>
          <div>
            <p>
              Hoje realizamos mais de 200 atendimentos psicológicos por mês.
              Para manter e ampliar o nosso trabalho, precisamos da sua ajuda.
            </p>
            <p>Doe qualquer valor pelo nosso pix:</p>
          </div>

          <img src={PixCenef} alt="QR Code pix cenef" />
          <span>{'Para doar, entre no sua conta pelo app do banco, vá em Pix > Pagamento por QR Code.'}</span>
        </div>
        <Image src={Donate} alt="Mãos simbolizando doação" />
      </Section>
    </Main>
  );
};

export default Donations;
