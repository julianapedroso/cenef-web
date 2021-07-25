import styled from "styled-components";
import { Typography, AppBar } from "@material-ui/core";

export const Wrapper = styled(AppBar)`
  box-shadow: none;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1440px;
`;

export const CdnLogo = styled.img`
  align-items: center;
`;

export const TextNavegation = styled(Typography)`
  font-family: 'DM Sans', sans-serif;
  color: #000;
`;

export const NavBar = styled.div`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 6.125em;
`;

export const Link = styled.a``;
