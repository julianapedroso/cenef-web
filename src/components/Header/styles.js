import styled from "styled-components";
import { Typography, AppBar } from "@material-ui/core";

export const Wrapper = styled(AppBar)`
  box-shadow: none;
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
  padding: 0 15.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 6.125em;
`;

export const Link = styled.a``;
