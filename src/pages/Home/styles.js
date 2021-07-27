import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.main`
max-width: 1440px;
margin: 0 auto;
`

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  h1 {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 60px;
  color: #0F264F;
  padding: 32px 0;

    @media (max-width: 450px) {
      font-size: 38px;
    }
  }
  
  img {
    height: auto;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 450px) {
      height: 200px;
      padding-top: 0;
      object-fit: cover;
    }
  }
  
  p {
    font-family: DM Sans;
    font-size: 28px;
    line-height: 35px;
    color: #0F264F;
    padding: 0 32px;

    @media(max-width: 890px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

export const Button = styled(Link)`
text-decoration: none;
background-color: #7C5CEA;
color: #fff;
padding: 16px 32px;
border-radius: 8px;
border: 0;
cursor: pointer;
font-size: 20px;
margin-top: 64px;

&:hover {
    filter: brightness(.9)
}
`

export const SectionTestimonials = styled.section`
padding: 100px 0 60px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  h1 {
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 60px;
    color: #0F264F;
    padding: 32px 0;

    @media (max-width: 450px) {
      font-size: 38px;
    }
  }
  
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 890px) {
      flex-direction: column;
      align-items: center;
    }
  }

  p {
    font-family: DM Sans;
    font-size: 28px;
    line-height: 35px;
    color: #0F264F;
    padding: 0 32px;

    @media(max-width: 890px) {
      padding: 16px 32px;
      font-size: 16px;
      line-height: 20px;
    }
  }
`