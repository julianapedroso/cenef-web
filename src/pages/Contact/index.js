import React from "react";
import ContactUs from "../../assets/contact.png";
import { Image, Main, Section } from "./styles";

const Contact = () => {
  return (
    <Main>
      <Section>
        <div>
          <h1>Contato</h1>
          <div>
            <p>
              Endereço:
              <br />
              Rua Urussanga, 444 - Bucarein
              <br />
              CEP 89202-400
              <br />
              Joinville/SC
            </p>
            <p>
              Telefone: (47) 3422-7033
              <br />
              E-mail: cenef.jlle@gmail.com
            </p>
          </div>
        </div>
        <Image src={ContactUs} alt="Mão sobre o notebook segurando iPhone" />
      </Section>
    </Main>
  );
};

export default Contact;
