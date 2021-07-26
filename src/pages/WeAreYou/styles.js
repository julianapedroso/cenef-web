import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1440px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 32px auto;

  @media (max-width: 499px) {
    margin: 0;
  }

  h1 {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 60px;

    @media (max-width: 499px) {
      font-size: 38px;
    }

    color: #0f264f;
    padding: 32px 0;

    @media (max-width: 499px) {
      padding: 16px 0;
    }
  }

  img {
    height: auto;
    width: 100%;

    @media (max-width: 499px) {
      width: 10%;
    }

    padding-top: 200px;
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

export const SectionTestimonials = styled.section`
  padding: 100px 0 60px 0;

  @media (max-width: 499px) {
    padding: 320px 0 0 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    display: flex;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 60px;

    @media (max-width: 499px) {
      font-size: 38px;
      margin: 5px 32px;
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
  display: flex;
  margin: 3rem 43rem;
  justify-content: left;
  position: absolute;

  @media (max-width: 450px) {
    object-fit: cover;
    margin: 0;

    img {
      top: 0;
      position: fixed;
      width: 100%;
    }
  }
`;
