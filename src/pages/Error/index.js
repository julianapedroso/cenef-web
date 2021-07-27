import React from "react";
import {
  Wrapper,
  ImgError,
  ContainerButton,
  Button,
} from "../../pages/Error/styles";
import CdnError from "../../assets/404.png";

const Error = () => {
  return (
    <>
      <Wrapper>
        <ImgError src={CdnError} alt="Erro 4040 de página não encontrada" />
      </Wrapper>
      <ContainerButton>
        <Button to="/">Voltar para Home</Button>
      </ContainerButton>
    </>
  );
};

export default Error;
