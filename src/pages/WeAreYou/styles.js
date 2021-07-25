import styled from "styled-components";

export const Wrapper = styled.section`
  
`;

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 1440px;
margin: 10rem auto;

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

export const SectionTestimonials = styled.section`
  padding: 100px 0 60px 0;
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
    color: #0f264f;
    margin: 32px;
  }

  div {
    display: grid;
    justify-content: space-around;
  }

  p {
    font-family: DM Sans;
    font-size: 1.75rem;
    line-height: 35px;
    color: #0f264f;
    padding: 0 32px;
    max-width: 650px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  margin: 3rem 43rem;
  justify-content: left;

  @media (max-width: 499px) {
    display: flex;
    justify-content: center;
    position: relative;
  }
`