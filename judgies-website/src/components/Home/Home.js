import logo from "../../media/channelPfp.png";
import background from "../../media/90sBackground.jpg";
import messageImg from "../../media/Oops All New Content.png"
import "./Home.css";
import VideoSection from "../VideoSection/VideoSection";
import ExternalLinkSection from "../ExternalLinkSection/ExternalLinkSection";

function Home() {
  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="LogoContainer">
        <img className="Logo" src={logo} alt="Logo" />
      </div>
      <div className="Message">
        <img className="MessageImg" src={messageImg} alt="Oops! All New Content!"/>
      </div>
      <VideoSection />
      <ExternalLinkSection />
    </div>
  );
}

export default Home;
