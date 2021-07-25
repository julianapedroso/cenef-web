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
      margin-bottom: 16px;
      color: #0f264f;

      @media (max-width: 450px) {
        font-size: 38px;
        margin: 16px 0;
      }
    }

    img {
      max-width: 180px;
      align-self: center;
      @media (max-width: 450px) {
        margin-bottom: 100px;
      }
    }

    form {
      max-width: 500px;

      input {
        :nth-child(2n) {
          margin-bottom: 8px;
          margin-left: 8px;
        }
        width: calc(50% - 4px);
        max-width: 250px;
        height: 48px;
        background: #ffffff;
        opacity: 0.85;
        border: 1px solid #b6b6b6;
        box-sizing: border-box;
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 0 8px;

        font-family: "DM Sans";
        font-weight: 300;
        font-size: 18px;

        color: #0f264f;
      }

      textarea {
        width: 100%;
        height: 86px;

        background: #ffffff;
        opacity: 0.85;
        border: 1px solid #b6b6b6;
        box-sizing: border-box;
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 8px;

        resize: vertical;

        font-family: "DM Sans";
        font-weight: 300;
        font-size: 18px;

        color: #0f264f;
      }

      button {
        background-color: #7c5cea;
        color: #fff;
        padding: 16px 32px;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
        font-size: 20px;
        margin: 8px 0 32px 0;

        &:hover {
          filter: brightness(0.9);
        }

        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    font-size: 28px;
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
