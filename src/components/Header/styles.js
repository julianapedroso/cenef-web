import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
`;

export const ButtonMenu = styled.button`
  float: right;
  display: none;
  border: none;
  background-color: #fff;
  margin-right: 10px;
  margin-top: 10px;

  @media (max-width: 1250px) {
    display: block;
  }
`;

export const CdnLogo = styled.img`
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  width: 221px;

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const ButtonClose = styled.button`
  display: none;
  border: none;
  border: none;
  background-color: #fff;
  margin-right: 10px;

  @media (max-width: 1250px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const NavBar = styled.div`
  float: right;
  margin-top: 36px;
  transition: all 0.5s;
  &.menuOpened {
    left: 0;
    z-index: 1;
  }

  @media (max-width: 1250px) {
    position: fixed;
    margin: 0;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 100px;
  }

  ul {
    list-style: none;

    @media (max-width: 1250px) {
      padding: 0;
    }
  }

  li {
    display: inline-block;
    margin: 0 20px;

    @media (max-width: 1250px) {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
  }

  a {
    text-decoration: none;
    color: #0f264f;
    font-weight: bold;
    font-size: 30px;
    font-family: "DM Sans";

    @media (max-width: 1250px) {
      line-height: 80px;
    }
  }
`;

export const Link = styled.a``;
