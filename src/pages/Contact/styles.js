import styled from "styled-components";

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  min-height: calc(100vh - 98px);
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 98px;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 0 64px;
    width: 50%;
    font-family: "DM Sans";

    @media (max-width: 450px) {
      padding: 0 32px;
      width: 100%;
      order: 2;
    }

    h1 {
      font-weight: 500;
      font-size: 60px;

      @media (max-width: 450px) {
        font-size: 38px;
        margin: 10px 0;
      }

      margin-bottom: 16px;
      color: #0f264f;
    }

    img {
      max-width: 180px;
      align-self: center;

      @media (max-width: 450px) {
        margin-bottom: 100px;
      }
    }
  }

  p {
    font-size: 28px;

    @media (max-width: 450px) {
      font-size: 16px;
      margin: 0;
      line-height: 20.83px;
    }

    line-height: 36px;
    max-width: 500px;
    color: #0f264f;

    :last-child {
      padding: 32px 0;
    }
  }
`;

export const Image = styled.img`
  width: 50%;

  @media (max-width: 450px) {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
