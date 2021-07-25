import React from "react";
import {
  Section,
  SectionTestimonials,
  Wrapper,
  ContainerImage,
} from "./styles";
// assets
import ImageCard from "../../assets/image-card.png";

const WeAreYou = () => {
  return (
    <main>
      <SectionTestimonials>
        <h1>Quem Somos</h1>
        <Wrapper>
          <p>
            O CENEF – Centro de Estudos e Orientação da Família é uma
            instituição filantrópica que, há mais de 40 anos, realiza
            atendimento terapêutico nas áreas de Psicologia e Psicopedagogia à
            comunidade em situação de vulnerabilidade social.
          </p>
        </Wrapper>
        <h1>Nossa Missão</h1>
        <p>
          Contribuir para o desenvolvimento humano saudável e para o
          fortalecimento de vínculos familiares e sociais através de ações
          multiprofissionais de promoção e prevenção.
        </p>
        <ContainerImage>
          <img
            src={ImageCard}
            alt="Pessoas sorrindo e fazendo pose para foto"
          />
        </ContainerImage>
      </SectionTestimonials>
      <Section>
        <h1>O que fazemos</h1>
        <p>
          Atendemos demandas vindas de órgãos como Pronto Atendimento
          Psicossocial, Vara da Família, da Infância e da Adolescência, Unidades
          Básicas de Saúde, hospitais, abrigos, Delegacia da Mulher, Conselhos
          Tutelar, entre outros.
        </p>

        <br />
        <p>
          Em geral, oferecemos atendimentos individualizados para pessoas em
          situação de vulnerabilidade social, a partir dos 05 anos de idade,
          visando o desenvolvimento de uma boa saúde mental, fortalecendo a
          função protetiva da família, mobilizando as redes sociais de apoio,
          contribuindo para a prevenção de situações de violências e promoção do
          bem estar as pessoas ou famílias que vivenciaram ou estão vivenciando
          sofrimento psíquico, violências, negligências.
        </p>
        <br />

        <p>
          Nossas principais demandas são:
          <br />
          - Transtornos mentais: ansiedade, depressão, entre outros;
          <br />
          - Problemas de relacionamentos: déficit na interação social;
          <br />
          - Ideação suicida;
          <br />
          - Conflitos familiares: divórcios e separações conturbadas, violência
          doméstica, alienação parental, disputa de guarda, entre outros;
          <br />- Abuso sexual infantil.
        </p>
      </Section>
    </main>
  );
};

export default WeAreYou;
