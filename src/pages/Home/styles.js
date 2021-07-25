import styled from 'styled-components'

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 1440px;
margin: 0 auto;

  h1 {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 60px;
  color: #0F264F;
  padding: 32px 0;
  }
  
  img {
    height: auto;
    width: 100%;
    padding-top: 200px;
  }
  
  p {
    font-family: DM Sans;
    font-size: 28px;
    line-height: 35px;
    color: #0F264F;
    padding: 0 32px;
  }
`

export const Button = styled.button`
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
max-width: 1440px;
margin: 0 auto;

  h1 {
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 60px;
    color: #0F264F;
    padding: 32px 0;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    /* padding: 0 32px; */
    width: 100%;
  }

  p {
    font-family: DM Sans;
    font-size: 28px;
    line-height: 35px;
    color: #0F264F;
    padding: 0 32px;
    max-width: 460px;
  }
`