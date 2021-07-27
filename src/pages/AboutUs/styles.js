import styled from "styled-components";

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 98px);
`;

export const Wrapper = styled.section`
  width: 50%;

  @media (max-width: 499px) {
    width: 100%;
    }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  h1 {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 60px;

    @media (max-width: 499px) {
      font-size: 38px;
      padding: 16px 32px;
      align-self: flex-start;
    }

    color: #0f264f;
    padding: 32px 0;
  }

  img {
    height: auto;
    width: 100%;

    @media (max-width: 499px) {
      width: 10%;
    }
  }

  p {
    font-family: DM Sans;
    font-size: 28px;

    @media (max-width: 499px) {
      font-size: 16px;
      line-height: 20px;
    }

    line-height: 35px;
    color: #0f264f;
    padding: 0 32px;
  }
`;

export const SectionAboutUs = styled.section`
  padding: 100px 0 60px 0;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 0 0 60px 0;
  }


  display: flex;
  justify-content: center;
  align-items: center;


  h1 {
    display: flex;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 60px;

    @media (max-width: 499px) {
      font-size: 38px;
      margin: 10px 32px;
    }

    color: #0f264f;
    margin: 32px;
  }

  div {
    display: grid;
    justify-content: space-around;
  }

  p {
    font-family: DM Sans;
    font-size: 28px;
    line-height: 35px;

    @media (max-width: 499px) {
      font-size: 16px;
      line-height: 20px;
    }

    line-height: 35px;
    color: #0f264f;
    padding: 10px 32px;
    max-width: 650px;
  }
`;

export const ContainerImage = styled.div`
width: 50%;

@media (max-width: 499px) {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    }
`;
