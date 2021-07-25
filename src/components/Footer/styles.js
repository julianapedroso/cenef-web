import styled from "styled-components";

export const FooterPage = styled.footer`
  background-color: #7c5cea;
  height: 91px;
  display: flex;
  justify-content: center;

  > div {
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
  }

  span {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;

    @media (max-width: 450px) {
      display: none;
    }
  }

  p {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 24px;
    text-decoration-line: underline;
    color: #ffffff;

    @media (max-width: 450px) {
      font-size: 16px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    a {
      :last-child {
        margin-left: 20px;
      }
    }
  }
`;
