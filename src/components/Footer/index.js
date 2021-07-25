import { FooterPage, SocialMedia } from "./styles";
import LogoFacebook from "../../assets/facebook.svg";
import LogoInstagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <FooterPage>
        <div>
          <div>
            <span>Mídias</span>
            <SocialMedia>
              <a target="_blank" rel="noopener noreferrer" href="https://pt-br.facebook.com/cenef.jlle/">
                <img src={LogoFacebook} alt="Logo facebook" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cenefjoinville/">
                <img src={LogoInstagram} alt="Logo instagram" />
              </a>
            </SocialMedia>
          </div>
          <p>cenef.jlle@gmail.com</p>
        </div>
      </FooterPage>
    </>
  );
};

export default Footer;
