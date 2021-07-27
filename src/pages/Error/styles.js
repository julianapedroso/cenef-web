import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ImgError = styled.img`
  width: 40%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  background-color: #7c5cea;
  color: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  margin-top: 30px;

  &:hover {
    filter: brightness(0.9);
  }
`;
