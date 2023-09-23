import "./ExternalLinkSection.css";
import instagramIcon from "../../media/icons/instagramIcon.png";
import twitterIcon from "../../media/icons/twitterIcon.png";
import patreonIcon from "../../media/icons/patreonIcon.png";
import tiktokIcon from "../../media/icons/tiktokIcon.png";

function ExternalLinkSection() {
  return (
    <div className="ExternalLinkSection">
      <div className="message">
        Join our socials to become a Certified Piss Baby™!
      </div>
      <div className="iconSection">
        <div className="LogoCircle">
          <a href="https://www.instagram.com/judgiespod/">
            <img className="Icon" src={instagramIcon} alt="instagramIcon" />
          </a>
        </div>
        <div className="LogoCircle">
          <a href="https://twitter.com/judgiespod/">
            <img className="Icon" src={twitterIcon} alt="twitterIcon" />
          </a>
        </div>
        <div className="LogoCircle">
          <a href="https://www.tiktok.com/@judgiespod">
            <img className="Icon" src={tiktokIcon} alt="tiktokIcon" />
          </a>
        </div>
        <div className="LogoCircle">
          <a href="https://www.patreon.com/JudgiesPod">
            <img className="Icon" src={patreonIcon} alt="patreonIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExternalLinkSection;
